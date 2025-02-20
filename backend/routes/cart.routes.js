const express = require('express');
const router = express.Router();
const { addCart, getCart, deleteCart } = require('../controllers/cart.controller');

router.post('/addCart', addCart);
router.get('/getCart', getCart);
router.delete('/deleteCart/:id', deleteCart);


module.exports = router;