const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address.controller');

// Get all addresses
router.get('/', addressController.getAllAddresses);

// Add new address
router.post('/', addressController.addAddress);

// Update address
router.put('/:id', addressController.updateAddress);

// Delete address
router.delete('/:id', addressController.deleteAddress);

module.exports = router;
