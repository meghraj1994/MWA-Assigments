const express = require('express');
const path = require('path');
const routes = require('./api/routes');
const app = express();

app.set('port', '5353');

// using routers middleware
app.use('/mult', routes);

//server starts here
const server = app.listen(app.get('port'), function () {
  const port = server.address().port;
  console.log('Server is running on port', port);
});
