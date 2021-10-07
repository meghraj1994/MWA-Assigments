require('dotenv').config({ path: '.env' });
const express = require('express');
require('./api/data/game-model');
require('./api/data/db');
const route = require('./api/router/gamerouter');
const path = require('path');
const app = express();



app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//to connect with angular app
// app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use(express.static(path.join(__dirname, 'public')));

//using router middleware
app.use('/api', route);

const PORT = process.env.PORT || 6000;
const server = app.listen(PORT, function () {
  console.log(`server is running on port ${process.env.PORT}`);
});
