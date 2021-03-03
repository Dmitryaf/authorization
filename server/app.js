const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const app = express();

const authRoute = require('./routes/auth');
const filesRoute = require('./routes/files');

mongoose
  .connect(config.get('mongoURI'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
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
    origin: '*',
    methods: 'GET, PUT, PATCH, POST, DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  })
);

app.use('/api/auth', authRoute);
app.use('/api/files', filesRoute);

module.exports = app;
