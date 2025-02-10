const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/user.controller");
const checkUserCredentials = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", checkUserCredentials, login);

module.exports = router;