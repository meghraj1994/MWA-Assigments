const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const router = require('./api/routes');
const app = express();

//static middleware
app.use(express.static(path.join(__dirname, 'public')));

//loading env files
dotenv.config({ path: './config/config.env' });

//these two middleware withouth callback function is used for user request from "body"
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//loading router middleware
app.use('/api', router);

//server starts here
const PORT = process.env.PORT;
const server = app.listen(PORT, function () {
  console.log(`Server is running on port ${process.env.PORT}`);
});
