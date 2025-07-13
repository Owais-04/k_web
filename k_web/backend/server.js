import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import destinationRouter from './routes/destination.js';
import authRouter from './routes/auth.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Register auth routes
app.use('/api/auth', authRouter);
// Register destination routes
app.use('/api/destinations', destinationRouter);

// Connect to MongoDB before starting the server
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});

// Example route (to be replaced with real routes)
app.get('/', (req, res) => {
    res.send('API is running');
});