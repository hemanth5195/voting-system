// signupRouter.js

const express = require('express');
const router = express.Router();
const { signup } = require('./signupController');

router.post('/signup', signup); // Corrected route path: '/signup' instead of './signup'

module.exports = router;
