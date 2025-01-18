// database/db.js

import mongoose from "mongoose";

// Database Connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://aryaanpanwar:JqrXRjVkOcZpeEDH@cluster0.jeto4.mongodb.net/mydb",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("MongoDB Connected:");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
