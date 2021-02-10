const File = require('../models/File');

module.exports.getAll = async function (req, res) {
  try {
    const files = await File.find({});
    res.status(200).json(files);
  } catch (error) {
    console.error(error.message);
  }
};
