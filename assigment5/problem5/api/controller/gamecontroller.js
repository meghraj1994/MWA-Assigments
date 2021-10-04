const { query } = require('express');
const mongoose = require('mongoose');
const game = mongoose.model('Game');
const allGames = function (req, res) {
  console.log('get all games');
  var offset = 0;
  var count = 5;
  var maxCount = 10;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({ message: 'Query string offset and count should be numbers' });
    return;
  }
  if (count > maxCount) {
    res.status(500).json({ message: 'cannot exceed maxCount of' + maxCount });
    return;
  }
  game
    .find()
    .skip(offset)
    .limit(count)
    .exec(function (err, games) {
      if (err) {
        console.log('error finding games');
        res.status(500).json(err);
      } else {
        console.log('Query game found', games.length);
        res.status(200).json(games);
      }
    });
};

const oneGame = function (req, res) {
  console.log('one game controller');
  var gameId = req.params.gameId;
  if (mongoose.isValidObjectId(req.params.gameId)) {
    game.findById(gameId).exec(function (err, game) {
      if (err) {
        res.status(500).json({ message: 'error in finding games', err });
      } else if (!game) {
        res
          .status(404)
          .json({ message: 'entered gameId not found in database' });
      } else {
        console.log('one game Found');
        res.status(200).json(game);
      }
    });
  } else {
    console.log('Please Enter valid gameId', gameId);
    res.status(400).json({ message: 'entered gameId is not valid' + gameId });
    return;
  }
};

module.exports = {
  allGames: allGames,
  oneGame: oneGame,
};
