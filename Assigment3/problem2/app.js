const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./api/routes');
const app = express();

//load env variable
dotenv.config({ path: './config/config.env' });

// using module routers
app.use('/mult', routes);

//server starts here
const PORT = process.env.PORT;
const server = app.listen(PORT, function (req, res) {
  console.log(`Server is running on port ${process.env.PORT}`);
});
