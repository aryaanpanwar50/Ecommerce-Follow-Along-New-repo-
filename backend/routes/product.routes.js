const express = require("express");
const router = express.Router();

const { addProduct,getProducts,updateProduct } = require("../controllers/product.controller");

// Route to add a new product
router.post("/add", addProduct); 

router.get('/get', getProducts);

router.put('/update/:id', updateProduct); // Ensure the route matches the frontend request

module.exports = router;