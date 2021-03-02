const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/auth', authMiddleware, controller.auth);

module.exports = router;
