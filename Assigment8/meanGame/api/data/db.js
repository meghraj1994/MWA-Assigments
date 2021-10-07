const mongoose = require('mongoose');

//meangameDb is our databaseNAme
const dbUrl = 'mongodb://localhost:27017/meanGameDB';
// const dburl = process.env.DATABASE_URL + process.env.DATABASE_NAME;
mongoose.connect(dbUrl);

mongoose.connection.on('connected', function () {
  console.log('mongoose is connected to dburl', dbUrl);
});

mongoose.connection.on('disconnected', function () {
  console.log('mongoose is disconnecte');
});
mongoose.connection.on('error', function (err) {
  console.log('mongoose connection error', err);
});

// to disconnect mongoose
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('mongoose is mongoose is disconnected by app termination');
    process.exit(0);
  });
});

process.on('SIGTERM', function () {
  process.connection.close(function () {
    console.log('mongoose is disconneted by app termination');
    process.exit(0);
  });
});

process.on('SIGUSR2', function () {
  process.connection.close(function () {
    console.log('mongoose is disconnected by app termination');
    process.exit(0);
  });
});
