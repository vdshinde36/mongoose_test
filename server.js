const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const config = require('./config.js');

const app = express();

mongoose.connect(config.DB, { useMongoClient: true })
  .then(() => console.log(`connected to the`))
  .catch(err => console.log(`error connecting to the Database ${err}`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});