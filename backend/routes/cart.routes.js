const express = require('express');
const router = express.Router();
const { addCart, getCart, deleteCart, updateCartQuantity, clearCart } = require('../controllers/cart.controller');

router.post('/addCart', addCart);
router.get('/getCart', getCart);
router.delete('/deleteCart/:id', deleteCart);
router.put('/updateQuantity/:id', updateCartQuantity);
router.delete('/clearCart', clearCart);

module.exports = router;