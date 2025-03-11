const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
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

// Add compound unique index
cartSchema.index({ userId: 1, productId: 1 }, { unique: true });

module.exports = mongoose.model('Cart', cartSchema);