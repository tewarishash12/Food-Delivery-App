const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body } = require('express-validator');
const authController = require("../controllers/authController")

router.post("/register", [
    body('username').isLength({ min:5 }),
    body('email').isEmail(),
    body('password', 'Password must be atleast of 5 characters').isLength({ min:5 })
] , authController.register);

router.post("/login", authController.login);

module.exports = router;