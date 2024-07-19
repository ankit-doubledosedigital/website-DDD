const express = require('express');
const router = express.Router();
const textController=require('../controller/Text');

router.post('/',textController.handleText);
  



module.exports = router;