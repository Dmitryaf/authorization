const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const File = require('../models/File');
const fileService = require('../services/fileService');

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const passwordResult = bcrypt.compareSync(password, user.password);

      if (passwordResult) {
        const token = jwt.sign({ id: user.id }, config.get('secretKey'), {
          expiresIn: '1h'
        });

        res.status(200).json({
          token: `${token}`,
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

module.exports.registration = async (req, res) => {
  const { email, password } = req.body;
  const candidate = await User.findOne({ email });

  if (candidate) {
    res.status(409).json({
      message: `User with email ${email} already exist`
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const reqPassword = password;

    const user = new User({
      email,
      password: bcrypt.hashSync(reqPassword, salt)
    });

    try {
      await user.save();
      await fileService.createDir(new File({ user: user.id, name: '' }));
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
