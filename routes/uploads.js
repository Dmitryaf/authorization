const express = require('express');
const router = express.Router();
const controller = require('../controllers/uploads');

router.post('/', controller.getFile);

module.exports = router;
