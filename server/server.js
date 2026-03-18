import express from 'express';
import "dotenv/config";
import cors from 'cors';                    //Allows your frontend (React) to call the backend
import connectDB from './configs/db.js'; 
import userRouter from './routes/userRoutes.js';
import ownerRouter from './routes/ownerRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';

// Create Express app
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(cors());                    // Enable CORS for all routes
app.use(express.json());            // Allows Express to read JSON request bodies.

app.get('/', (req, res) => {
    res.send('Server is running!');
});
app.use('/api/users', userRouter);
app.use('/api/owners', ownerRouter);
app.use('/api/bookings', bookingRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});