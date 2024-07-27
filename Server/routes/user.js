const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

// router.post('/login', userController.handleUserData);
router.post('/', userController.handleUserData);
router.get('/getData', userController.getUserData);

module.exports = router;
