const app = require('./app');
const config = require('config');
const port = process.env.PORT || config.get('serverPort');

app.listen(port, () => {
  console.log(`Server has been started on port ${port}!`);
});
