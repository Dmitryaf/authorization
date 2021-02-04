const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const downloadRoute = require('./routes/download');
const filesRoute = require('./routes/files');
const uploadsRoute = require('./routes/uploads');

const key = require('./config/key');

mongoose
  .connect(key.mongoURI, {
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

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  require('cors')({
    origin: 'http://localhost:3000',
  })
);

app.use('/download', downloadRoute);
app.use('/files', filesRoute);
app.use('/uploads', uploadsRoute);

module.exports = app;
