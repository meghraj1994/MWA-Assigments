const express = require('express');
const dotenv = require('dotenv');
//requiring student model
require('./api/data/game-model');
const path = require('path');
//require database connection
require('./api/data/db');
const { urlencoded } = require('express');

const routes = require('./api/routes');
const app = express();

// app.use(function () {
//   console.log(req.method, req.url);
//   next();
// });

//loading static file
app.use(express.static(path.join(__dirname, 'public')));

//loading dotenv file
dotenv.config({ path: './config/config.env' });

//loading middleware which help to read query from body
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//loading router middleware
app.use('/api', routes);

//server starts here
const port = process.env.port;
app.listen(port, function () {
  console.log(`server is running on port ${process.env.port}`);
});
