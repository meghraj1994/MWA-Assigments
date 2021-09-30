const gamesData = require('../data/games.json');
const allGames = function (req, res) {
  console.log('all games controller function');
  res.status(200).json(gamesData);
};

const queryGames = function (req, res) {
  console.log(req.query);
  let offset = 0;
  let count = 5;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
    console.log('offset is', offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
    console.log('count is ', count);
  }
  const theGames = gamesData.slice(offset, offset + count);
  res.status(200).json(theGames);
};
const oneGame = function (req, res) {
  console.log(`The game id is ${req.params.gameId}`);
  const gameId = req.params.gameId;
  const theGame = gamesData[gameId];
  console.log(`Fetch the game with the gameId ${req.params.gameId}`);
  res.status(200).json(theGame);
};

// @desc  Adding new Games
// @method  Post
const addOne = function (req, res) {
  console.log('this is from add games function game');
  console.log(req.body);
  res.status(200).json(req.body);
};

module.exports = {
  allGames: allGames,
  oneGame: oneGame,
  queryGames: queryGames,
  addOne: addOne,
};
