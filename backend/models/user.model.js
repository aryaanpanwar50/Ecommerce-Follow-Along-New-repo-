const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter a valid email"]
    },
    password: {
        type: String, // Add type here
        required: true,
        minelength:8,
        validate: {
            validator: validatePassword,
            message:"Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
        },
    },

});



function validatePassword(password){
    return(
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*(){}<>?]/.test(password)
    )
    
}




module.exports = mongoose.model('User', userSchema);
