const mongoose = require('mongoose');

//SchoolDB is our database
const dburl = 'mongodb://localhost:27017/SchoolDB';
mongoose.connect(dburl);

//to check connection

mongoose.connection.on('connected', function () {
  console.log('mongoose is connected' + dburl);
});

mongoose.connection.on('disconnected', function () {
  console.log('mongoose is disconnected');
});

mongoose.connection.on('error', function (err) {
  console.log('mongoose connection error' + err);
});

//to disconnect mongoose
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('mongoose is discoonected by app termination');
    process.exit(0);
  });
});

process.on('SIGTERM', function () {
  mongoose.connection.close(function () {
    console.log('mongoose is disconnected by app termination');
    process.exit(0);
  });
});
