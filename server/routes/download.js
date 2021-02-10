const express = require('express');
const router = express.Router();
const controller = require('../controllers/download');
const upload = require('../middleware/upload');

router.post('/', upload.single('file'), controller.create);

module.exports = router;
