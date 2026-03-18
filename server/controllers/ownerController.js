import User from "../models/User.js";
import fs from 'fs';
import imagekit from "../configs/imageKit.js";
import Car from "../models/Car.js";
import Booking from "../models/Booking.js";

// Controller to change user role to owner
export const changeRoletoOwner= async(req, res) =>{
    try{
        const {_id}= req.user;
        await User.findByIdAndUpdate(_id, {role: 'owner'});
        res.json({success: true, message: 'Now you are an owner. You can add your cars for rent.'});
    }
    catch (error){
        res.json({success: false, message: "Not logged-in" });
    }
}

// Controller to add a car (for owners)
export const addCar= async(req, res) =>{
    try{
        const {_id}= req.user;
        let car= JSON.parse(req.body.carData);       //JSON.parse() converts req.body.carData(string) into a real object.

        const imageFile= req.file;

        // Uploading image to ImageKit
        const fileBuffer= fs.readFileSync(imageFile.path);
        const response= await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })

        // optimizing the image URL by applying transformations (resizing, compressing, and converting to webp format)
        var optimizedImageURL = imagekit.url({
            path: response.filePath,
            transformation: [
                {
                    width: 1280,
                    quality: 'auto',      //auto compresses the image without losing much quality
                    format: 'webp'        // convert to modern webp format for better performance
                }
            ]
        });

        const image= optimizedImageURL;
        await Car.create({...car, owner: _id, image});

        res.json({success: true, message: 'Car added successfully.'});

    }catch (error){
        res.json({success: false, message: error.message });
    }
}

// Controller to get all cars of an owner
export const getOwnerCars= async(req, res) =>{
    try{
        const {_id}= req.user;  
        const cars= await Car.find({owner: _id});
        res.json({success: true, cars});
    } catch (error) {
        res.json({success: false, message: error.message });
    }
}

export const toggleCarAvailability= async(req, res) =>{
    try{
        const {carId}= req.body;
        const car= await Car.findById(carId);

        // Check if the car belongs to the owner making the request
        if(car.owner.toString() !== req.user._id.toString()){
            return res.json({success: false, message: 'You are not authorized to change availability of this car.'});
        }

        car.isAvailable= !car.isAvailable;
        await car.save();

        res.json({success: true, message: `Car is now ${car.isAvailable ? 'available' : 'unavailable'} for rent.`});

    } catch (error) {
        res.json({success: false, message: error.message });
    }
}

export const deleteCar= async(req, res) =>{ 
    try{
        const {carId}= req.body;
        const car= await Car.findById(carId);
        if(car.owner.toString() !== req.user._id.toString()){
            return res.json({success: false, message: 'You are not authorized to change availability of this car.'});
        }

        car.owner= null;   // Set owner to null before deleting the car bcoz agar hum directly delete kar denge to wo car rental requests ke records me se bhi delete ho jayega, aur data inconsistency create ho sakti hai
        car.isAvailable= false;  
        await car.save();

        res.json({success: true, message: 'Car removed from listing.'});

    } catch (error) {
        res.json({success: false, message: error.message });
    }  
}

//API to get dashboard data 
export const getDashboardData= async(req, res) =>{
    try{
        const {_id, role}= req.user;
        if(role !== 'owner'){
            return res.json({success: false, message: 'Unauthorized access.'});
        }

        const cars= await Car.find({owner: _id});
        const bookings= await Booking.find({owner: _id}).populate('car').sort({createdAt: -1});

        const pendingBookings= await Booking.find({owner: _id, status: 'pending'});
        const completedBookings= await Booking.find({owner: _id, status: 'confirmed'});

        const monthlyRevenue= bookings.slice().filter(booking=> booking.status === 'confirmed').reduce((total, booking)=> total + booking.price, 0);

        const dashboardData= {
            totalCars: cars.length,
            totalBookings: bookings.length,
            pendingBookings: pendingBookings.length,
            completedBookings: completedBookings.length,
            recentBookings: bookings.slice(0, 3), 
            monthlyRevenue
        };

        res.json({success: true, dashboardData});

    } catch (error) {
        res.json({success: false, message: error.message });
    }
}

export const updateUserImage = async(req, res) =>{
    try{
        const {_id}= req.user;

        const imageFile= req.file;

        const fileBuffer= fs.readFileSync(imageFile.path);
        const response= await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/users'
        })

        var optimizedImageURL = imagekit.url({
            path: response.filePath,
            transformation: [
                {
                    width: '400',
                    quality: 'auto',     
                    format: 'webp'       
                }
            ]
        });

        const image= optimizedImageURL;
        await User.findByIdAndUpdate(_id, {image});
        res.json({success: true, message: 'Profile picture updated successfully.'});


    } catch (error) {
        res.json({success: false, message: error.message });
    }   
}

