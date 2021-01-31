const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('files', fileSchema);
