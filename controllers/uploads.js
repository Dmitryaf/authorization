const fsPromises = require('fs').promises;
const iconv = require('iconv-lite');

module.exports.getFile = async function (req, res) {
  const fileName = req.body.fileName;
  res.setHeader('Content-Type', 'text/plain');
  const file = await fsPromises.readFile(`uploads/${fileName}`);
  const decodeFile = iconv.decode(file, 'windows-1251');
  res.send(decodeFile);
};
