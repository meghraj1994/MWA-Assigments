const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const router = require('./api/routes');
const app = express();
app.set('port', '5353');

//static middleware
app.use(express.static(path.join(__dirname, 'public')));

//these two middleware withouth callback function is used for user request from "body"
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//loading router middleware
app.use('/api', router);

//server starts here
const server = app.listen(app.get('port'), function () {
  const port = server.address().port;
  console.log('Server is running on port', port);
});
