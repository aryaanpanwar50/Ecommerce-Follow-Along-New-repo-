const Cart = require("../models/cart.model");
const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const addCart = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return res.status(401).send("Unauthorized");
    }

    const { productId, productName, price, image, imageUrl, quantity } = req.body;

    if (!productName || !price || !imageUrl || !quantity) {
      return res.status(400).send("All fields are required");
    }

    // Check if product already exists in user's cart
    const existingItem = await Cart.findOne({ 
      userId: decoded.userId,
      productId: productId 
    });

    if (existingItem) {
      return res.status(400).json({ message: 'Product already in your cart' });
    }

    const newCartItem = new Cart({
      userId: decoded.userId,
      productId,
      productName,
      price,
      image,
      imageUrl,
      quantity,
    });

    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Product already in your cart' });
    }
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return res.status(401).send("Unauthorized");
    }

    const products = await Cart.find({ userId: decoded.userId });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCart = async (req, res) => {
  try {
    const deletedProduct = await Cart.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }

    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;
    const productId = req.params.id;

    if (quantity < 1) {
      return res.status(400).send("Quantity must be at least 1");
    }

    const updatedProduct = await Cart.findByIdAndUpdate(
      productId,
      { quantity },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }

    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addCart, getCart, deleteCart, updateCartQuantity };