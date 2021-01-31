const File = require('../model/File');
const uuid = require('uuid');
const fs = require('fs');

module.exports.create = async function (req, res) {
  console.log(req.file);
  const file = new File({
    _id: uuid.v1(),
    name: req.file ? req.file.filename : 'noname',
  });

  try {
    await file.save();
    res.status(201).json(file);
  } catch (error) {
    console.error(error.message);
  }
};
