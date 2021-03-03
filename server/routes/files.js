const express = require('express');
const router = express.Router();
const controller = require('../controllers/files');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, controller.createDir);
router.get('/', authMiddleware, controller.getFiles);

module.exports = router;
