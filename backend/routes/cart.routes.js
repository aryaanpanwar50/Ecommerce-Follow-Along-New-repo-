const express = require('express');
const router = express.Router();
const { addCart, getCart, deleteCart, updateCartQuantity } = require('../controllers/cart.controller');

router.post('/addCart', addCart);
router.get('/getCart', getCart);
router.delete('/deleteCart/:id', deleteCart);
router.put('/updateQuantity/:id', updateCartQuantity);

module.exports = router;