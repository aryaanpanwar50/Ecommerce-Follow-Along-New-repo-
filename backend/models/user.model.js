const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: validatePassword,
            message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
        },
    },
}, { timestamps: true });

function validatePassword(password) {
    return (
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[\W_]/.test(password)
    );
}

const User = mongoose.model('User', userSchema);

module.exports = User;