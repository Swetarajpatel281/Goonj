// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/Authcontrollers');

const router = express.Router();

// Define the signup route
router.post('/signup', authController.signup);

module.exports = router;
