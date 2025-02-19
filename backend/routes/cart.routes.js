const express = require('express')
const router = express.Router()
const {addCart,getCart} = require('../controllers/cart.controller')

router.post('/addCart',addCart)
router.get('/getCart',getCart)

module.exports = router