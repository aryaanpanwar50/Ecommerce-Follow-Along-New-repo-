const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    default:1,
  },
});

module.exports = mongoose.model('Cart', cartSchema);