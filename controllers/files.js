const File = require('../model/File');
const fs = require('fs');

module.exports.getAll = async function (req, res) {
  try {
    const files = await File.find({});
    res.status(200).json(files);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports.update = async function (req, res) {
  const file = await File.findById(req.params.id);
  const updatedFile = fs.writeFile(
    `${file.name}`,
    req.body.content,
    function (error) {
      if (error) console.log(error.message);
      console.log(`Асинхронная запись файла завершена`);
    }
  );

  try {
    const file = await File.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updatedFile },
      { new: true }
    );
    res.status(200).json(file);
  } catch (error) {
    console.error(error.message);
  }
};
