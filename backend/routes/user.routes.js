const express = require("express");
const router = express.Router();
const { signup, login, getUserData, updateAddress } = require("../controllers/user.controller");
const auth = require('../middleware/auth');  // Update this line

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", auth, getUserData);
router.put("/profile/address", auth, updateAddress);

module.exports = router;