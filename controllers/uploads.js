const fsPromises = require('fs').promises;
const textract = require('textract');

module.exports.getFileText = async function (req, res) {
  const fileName = req.body.fileName;
  textract.fromFileWithPath(`uploads/${fileName}`, function (error, text) {
    try {
      res.status(200).send(text);
    } catch (error) {
      console.error(error.message);
    }
  });
};

module.exports.updateFile = async function (req, res) {
  const fileName = req.body.fileName;
  const content = req.body.content;
  const updatedfile = await fsPromises.writeFile(
    `uploads/${fileName}`,
    content
  );

  try {
    res.status(200).send(updatedfile);
  } catch (error) {
    console.error(error.message);
  }
};
