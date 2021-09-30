const gamesData = require('../data/games.json');
const allGames = function (req, res) {
  console.log('all games controller function');
  res.status(200).json(gamesData);
};

module.exports = {
  allGames: allGames,
};
