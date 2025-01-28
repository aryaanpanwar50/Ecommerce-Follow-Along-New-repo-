const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        // required: true,
        trim: true
    },
    productDescription: {
        type: String,
        // required: true,
        trim: true
    },
    price: {
        type: Number,
        // required: true,
        min: 0
    },
    imageUrl: {
        type: String,
        // required: true,
        trim: true
    },
    productType: {
        type: String,
        // required: true,
        enum: ['clothing', 'electronics', 'furniture', 'toys', 'books']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);