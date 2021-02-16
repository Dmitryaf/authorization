const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const controller = require('../controllers/auth');

router.post('/login', controller.login);
router.post(
  '/register',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 4 symbols').isLength({
      min: 5,
    }),
  ],
  controller.register
);

module.exports = router;
