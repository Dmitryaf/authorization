const { Schema, model } = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  files: [{ type: ObjectId, ref: 'File' }],
});

module.exports = model('User', fileSchema);
