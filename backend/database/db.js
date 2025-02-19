const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () =>{
    try{
       await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB is connected")

    }catch(error){
        console.error("MongoDB connection failed")
    }
};

module.exports = connectDB;