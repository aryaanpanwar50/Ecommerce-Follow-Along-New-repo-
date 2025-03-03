const express = require("express");
const router = express.Router();
const { signup, login, getUserData, updateAddress } = require("../controllers/user.controller");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", verifyToken, getUserData);
router.put("/profile/address", verifyToken, updateAddress);

module.exports = router;