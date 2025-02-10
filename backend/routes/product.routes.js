const express = require("express");
const router = express.Router();

const { addProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/product.controller");


router.post("/add", addProduct);

router.get('/get', getProducts);

router.put('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);

module.exports = router;