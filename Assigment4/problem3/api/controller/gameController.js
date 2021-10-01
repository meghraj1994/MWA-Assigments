const allGames = function (req, res) {
  const dbConnection = require('../data/dbConnection.js');
  const db = dbConnection.get();
  const collection = db.collection('games');
  let count = 6;
  if (req.query && req.query.num) {
    let num = parseInt(req.query.num);
    if (num > 9) {
      count = 9;
    }
    else
      count = num;
  }
  collection
    .find()
    .limit(count)
    .toArray(function (err, docs) {
      console.log('Found games', docs);
      res.status(200).json(docs);
    });
};

module.exports = {
  allGames: allGames,
};
