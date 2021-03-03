const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');

router.post('/login', controller.login);
router.post('/registration', controller.registration);
router.get('/auth', authMiddleware, controller.auth);

module.exports = router;
