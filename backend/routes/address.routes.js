const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Apply auth middleware to all routes
router.use(authMiddleware);

// Get all addresses (admin route)
router.get('/all', addressController.getAllAddresses);

// Get user's addresses
router.get('/my-addresses', addressController.getAddressesByUserId);

// Get specific address
router.get('/:addressId', addressController.getUserAddress);

// Add new address
router.post('/', addressController.addAddress);

// Update address
router.put('/:addressId', addressController.updateAddress);

// Delete address
router.delete('/:addressId', addressController.deleteAddress);

module.exports = router;
