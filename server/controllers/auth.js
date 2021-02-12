const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

module.exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    const passwordResult = bcrypt.compareSync(req.body.password, user.password);

    if (passwordResult) {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user._id,
        },
        config.get('secretKey'),
        { expiresIn: 60 * 60 }
      );

      res.status(200).json({
        token: `Bearer ${token}`,
        email: user.email,
        id: user._id,
      });
    } else {
      res.status(401).json({
        message: 'Неверный пароль',
      });
    }
  } else {
    res.status(404).json({
      message: 'Пользователь не найден',
    });
  }
};

module.exports.register = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });
  console.log(req.body);

  if (candidate) {
    res.status(409).json({
      message: 'Такой email уже существует',
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;

    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message ? error.message : error,
      });
    }
  }
};
