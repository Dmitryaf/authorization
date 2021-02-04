const express = require('express');
const router = express.Router();
const controller = require('../controllers/uploads');

router.post('/', controller.getFileText);
router.put('/', controller.updateFile);

module.exports = router;
