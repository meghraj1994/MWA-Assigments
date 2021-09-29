const express = require('express');
const app = express();
app.set('port', '5353');
const server = app.listen(app.get('port'), function () {
  console.log('Server is running on port', server.address().port);
});
