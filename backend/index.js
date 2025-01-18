import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './database/db.js'; // Ensure correct extension (.js)
import userRoutes from './routes/user.routes.js'; // Ensure correct extension (.js)

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.send("Server is running and connected to the database!");
});

// Mount the user routes
app.use("/api/users", userRoutes);

// Start the Server
const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    try {
        // Attempt to connect to the database before starting the server
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error("Failed to start the server:", error.message);
    }
});
