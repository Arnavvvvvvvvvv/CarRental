import Booking from "../models/Booking.js"
import Car from "../models/Car.js";

// Check if the car is available for the given dates (already booked toh nahi)
const checkAvailability = async(car, pickupDate, returnDate) => {
    const bookings= await Booking.find({
        car,
        pickupDate: {$lte: returnDate},          //existingpickupDate userreturnDate se chhota ya barabar hona chahiye
        returnDate: {$gte: pickupDate},          //existingreturnDate userpickupDate se bada ya barabar hona chahiye
    })
    return bookings.length === 0;                //agar bookings length 0 hai (no overlap=>no booking satisfying above condn found) toh car available hai
}

//API  to check availability of a car for given date and location
export const checkCarAvailability = async(req, res) => {
    try {
        const {location, pickupDate, returnDate} = req.body;
        // Find cars available in the location
        const cars= await Car.find({location, isAvailable: true});

        //check availability for each car for given date range
        const availableCarsPromises = cars.map(async (car)=>{
        const isAvailable = await checkAvailability(car._id, pickupDate, returnDate)
        return {...car._doc, isAvailable}                               // ... is spread operator hai jo car document ke saare fields ko copy karta hai
    })
        let availableCars = await Promise.all(availableCarsPromises);
        availableCars = availableCars.filter(car => car.isAvailable===true);  //filter out cars that are not available for the given date range
        res.json({success: true, availableCars: availableCars});

    } catch (error) {
        res.json({success:false, message: 'Server error'});
    }
}

//API to create a booking 
export const createBooking = async(req, res) => {
    try{
        const {_id}= req.user;  
        const {car, pickupDate, returnDate} = req.body;

        const isAvailable = await checkAvailability(car, pickupDate, returnDate);
        if(!isAvailable){
            return res.json({message: 'Car is not available for the selected dates'});
        }

        const carDetails = await Car.findById(car);

        const picked= new Date(pickupDate);                                                                         
        const returned= new Date(returnDate);
        if(returned < picked){
            return res.json({ success:false, message:"Return date must be after pickup date"});
        }

        const noOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 * 24)); //milliseconds to days
        const price = noOfDays * carDetails.price_per_day;

        await Booking.create({
            car,
            owner: carDetails.owner,  
            user: _id,
            pickupDate,
            returnDate,
            price,
        })
        res.json({success:true, message: 'Booking created successfully'});

    } catch(error){
        res.json({success: false, message: 'Server error'});
    }
}

//API to get all bookings of a user
export const getUserBookings = async(req, res) => {
    try{
        const {_id} = req.user;                        //populate replaces ids with actual data
        const bookings = await Booking.find({user: _id}).populate('car').sort({createdAt: -1});  //latest booking pehle show hogi
        res.json({success: true, bookings});
    }
    catch(error){  
        res.json({success:false, message: 'Server error'});
    }
}

//API to get all bookings of an owner
export const getOwnerBookings = async(req, res) => {
    try{
        if(req.user.role !== 'owner'){
            return res.json({message: 'Access denied'});
        }

        const bookings = await Booking.find({owner: req.user._id}).populate('car user').select('-user.password').sort({createdAt: -1});
        res.json({success: true, bookings});
        
    }catch(error){
        res.json({success:false, message: 'Server error'});
    }
}

//API to change booking status (owner can confirm or cancel the booking)
export const changeBookingStatus = async(req, res) => {
    try{
        if(req.user.role !== 'owner'){
            return res.json({message: 'Access denied'});
        }

        const {_id} = req.user;
        const {bookingId, status} = req.body;

        const booking = await Booking.findById(bookingId);
        if(booking.owner.toString() !== _id.toString()){   // Check if the booking belongs to the owner making the request
            return res.json({message: 'Unauthorized'});
        }

        booking.status = status;
        await booking.save();
        res.json({success:true, message: 'Booking status updated successfully'});

    }catch(error){
        res.json({success: false, message: error.message});
    }   
}