const Cart = require("../models/cart.model");

const addCart = async (req, res) => {
  try {
    const { productName, price, imageUrl,quantity } =
      req.body;

    if (!productName  || !price || !imageUrl||!quantity) {
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

module.exports = {addCart,getCart}