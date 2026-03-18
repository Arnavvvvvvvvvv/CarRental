import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Car from "../models/Car.js";

//Generate JWT Token : Used to create authentication tokens Tokens allow users to stay logged in.
const generateToken = (userId) => {
    const payload= userId;
    const secret= process.env.JWT_SECRET;
    return jwt.sign(payload, secret);
}

//User Registration
export const registerUser= async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password || password.length < 8) {
            return res.json({success: false, message: 'Please provide all required fields and ensure password is at least 8 characters long.'});
        }

        const userExists = await User.findOne({ email });
        if(userExists) {
            return res.json({success: false, message: 'User already exists.'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);  //10 is salt rounds which are random and ensures that the same password will have different hashes each time. An extra layer of security to protect against rainbow table attacks.
        const user= await User.create({ name, email, password: hashedPassword }); 

        const token= generateToken(user._id.toString());
        res.json({success: true, message: 'User registered successfully.', token });    

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message });
    }
}

//User Login
export const loginUser= async (req, res) => {
    try {
        const { email, password } = req.body;
        const user= await User.findOne({ email });

        if(!user) {
            return res.json({success: false, message: 'User not found.'});
        }

        const match= await bcrypt.compare(password, user.password);
        if(!match) {
            return res.json({success: false, message: 'Invalid email or password.'});
        }

        const token= generateToken(user._id.toString());
        res.json({success: true, message: 'User logged in successfully.', token });

    }
    catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message });
    }
}
// 200 → success (OK)
// 201 → created
// 400 → bad request
// 401 → unauthorized
// 404 → not found
// 500 → server error

//Get user data from token
export const getUserData= async (req, res) => {
    try {
        const {user}= req; //user is attached to req in authMiddleware
        res.json({success: true, user });
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message });
    }
}

//Get cars added by user
export const getUserCars= async (req, res) => {
    try {
        const cars= await Car.find({isAvailable: true})
        res.json({success: true, cars });
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message });
    }
}

