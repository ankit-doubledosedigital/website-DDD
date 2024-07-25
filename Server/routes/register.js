// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const registerController = require('../controller/register');

router.post('/', registerController.handleRegisterUser);

module.exports = router;
