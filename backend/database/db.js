const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
       await mongoose.connect("mongodb+srv://aryaanpanwar:JqrXRjVkOcZpeEDH@cluster0.jeto4.mongodb.net/mydb8")
        console.log("MongoDB is connected")

    }catch(error){
        console.error("MongoDB connection failed")
    }
};

module.exports = connectDB;