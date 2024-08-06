const express = require('express');
const { contactUs } = require('../controllers/contactController');
const router = express.Router();

router.post('/contactus', contactUs);

module.exports = router;
