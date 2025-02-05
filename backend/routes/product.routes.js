const express = require("express");
const router = express.Router();

const { addProduct,getProducts } = require("../controllers/product.controller");

// Route to add a new product
router.post("/add", addProduct);

router.get('/get', getProducts);

module.exports = router;