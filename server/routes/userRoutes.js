import express from 'express';
import { getUserCars, getUserData, loginUser, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const userRouter= express.Router();
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data', protect, getUserData); //Ensure that the user is authenticated before allowing access to this route
userRouter.get('/cars', getUserCars);

export default userRouter;