const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const passwordResult = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (passwordResult) {
        const token = jwt.sign({ id: user.id }, config.get('secretKey'), {
          expiresIn: '1h'
        });

        res.status(200).json({
          token: `Bearer ${token}`,
          user: {
            email: user.email,
            id: user.id
          }
        });
      } else {
        res.status(401).json({
          message: 'Invalid password'
        });
      }
    } else {
      res.status(404).json({
        message: 'User is not found'
      });
    }
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
};

module.exports.register = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    res.status(409).json({
      message: `User with email ${req.body.email} already exist`
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;

    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    });

    try {
      await user.save();
      res.status(201).json({
        message: 'User created'
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message ? error.message : error
      });
    }
  }
};

module.exports.auth = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, config.get('secretKey'), {
      expiresIn: '1h'
    });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email
      }
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
};
