const Product = require("../models/product.model");

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { productName, productDescription, price, imageUrl, productType } = req.body;

    // Validate required fields
    if (!productName || !productDescription || !price || !imageUrl || !productType) {
      return res.status(400).send("All fields are required");
    }

    // Create a new product
    const newProduct = new Product({
      productName,
      productDescription,
      price,
      imageUrl,
      productType,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).send({ data: newProduct });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body, 
      { new: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }
    
    res.status(200).send({ data: updatedProduct });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    } 

    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addProduct, getProducts, updateProduct, deleteProduct };