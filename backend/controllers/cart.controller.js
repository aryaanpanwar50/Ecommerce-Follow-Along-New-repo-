const Cart = require("../models/cart.model");

const addCart = async (req, res) => {
  try {
    const { productName, price, imageUrl, quantity } = req.body;

    if (!productName || !price || !imageUrl || !quantity) {
      return res.status(400).send("All fields are required");
    }

    const newProduct = new Cart({
      productName,
      price,
      imageUrl,
      quantity,
    });

    await newProduct.save();

    res.status(201).send({ data: newProduct });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCart = async (req, res) => {
  try {
    const products = await Cart.find();
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