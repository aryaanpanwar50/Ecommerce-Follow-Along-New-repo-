const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const auth = require('../middleware/auth');

router.post('/create', auth, orderController.createOrder);
router.get('/getOrders', auth, orderController.getOrders);

module.exports = router;
