const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const app = express();

const authRoute = require('./routes/auth');
const downloadRoute = require('./routes/download');
const filesRoute = require('./routes/files');

mongoose
  .connect(config.get('mongoURI'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/uploads', express.static('uploads'));
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/auth', authRoute);
app.use('/download', downloadRoute);
app.use('/files', filesRoute);

module.exports = app;
