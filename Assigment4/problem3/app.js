const express = require('express');
const path = require('path');
const routes = require('./api/router');
require('./api/data/dbConnection').opend();
const app = express();
app.set('PORT', 5353);

//use router middleware
app.use('/api', routes);

//server starts here
const server = app.listen(app.get('PORT'), function () {
  console.log('Server is running on port', server.address().port);
});
