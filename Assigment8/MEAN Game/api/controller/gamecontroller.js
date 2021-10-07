const { json } = require('express');
const mongoose = require('mongoose');

// all game of database are now in Game
const Games = mongoose.model('Game');

//getAll

const getAllGames = function (req, res) {
  var offset = 0;
  var count = 18;
  var maxCount = 25;

  if (req.require && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  if (count > maxCount) {
    res
      .status(400)
      .json({ message: 'count cannot exceed maxCount !!!', maxCount });
    return;
  }

  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({ message: 'query string offset and count should be numbers !!!' });
    return;
  }
  Games.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, games) {
      if (err) {
        res.status(500).json({ message: 'error in fetching games', err });
      } else {
        res.status(201).json(games);
      }
    });
};

//get one game
const getOneGame = function (req, res) {
  const gameId = req.params.gameId;
  if (mongoose.isValidObjectId(req.params.gameId)) {
    Games.findById(gameId).exec(function (err, game) {
      if (err) {
        res.status(500).json({ message: 'error in finding game', err });
      } else if (!game) {
        res.status(404).json({
          message: 'enetered gameId not found in our database !!!',
          gameId,
        });
        return;
      } else {
        res.status(201).json(game);
      }
    });
  } else {
    res.status(400).json({ message: 'entered gameId is not valid', gameId });
    return;
  }
};

//add one game
const addOneGame = function (req, res) {
  Games.create(
    {
      title: req.body.title,
      year: parseInt(req.body.year),
      price: parseFloat(req.body.price),
      designer: req.body.designer,
      minPlayers: parseInt(req.body.minPlayers),
      maxPlayers: parseInt(req.body.maxPlayers),
      rate: parseFloat(req.body.rate),
    },
    function (err, game) {
      if (err) {
        res.status(500).json({ message: 'error in creating game', err });
      } else {
        res.status(201).json(game);
      }
    }
  );
};

//update game
const updateGame = function (req, res) {
  const gameId = req.params.gameId;
  if (mongoose.isValidObjectId(req.params.gameId)) {
    Games.findById(gameId).exec(function (err, game) {
      if (err) {
        res.status(500).json({ message: 'errror in finding game', err });
      } else if (!game) {
        res.status(400).json({ message: 'entered gameId not found in db' });
        return;
      } else {
        game.title = req.body.title;
        game.year = parseInt(req.body.year);
        game.price = parseFloat(req.body.price);
        game.designer = req.body.designer;
        game.minPlayers = parseInt(req.body.minPlayers);
        game.maxPlayers = parseInt(req.body.maxPlayers);
        game.rate = parseFloat(req.body.rate);
        game.minAge = parseInt(req.body.minAge);
      }
      game.save(function (err, game) {
        if (err) {
          res.status(500).json({ message: 'error in saving game', err });
        } else {
          res.status(201).json(game);
        }
      });
    });
  } else {
    res.status(400).json({ message: 'entered gameId is not valid', gameId });
    return;
  }
};

//delete game

const deleteGame = function (req, res) {
  const gameId = req.params.gameId;
  if (mongoose.isValidObjectId(req.params.gameId)) {
    Games.findByIdAndRemove(gameId).exec(function (err, game) {
      if (err) {
        res.status(500).json({ message: 'error in deleting game !!!', err });
      } else if (!game) {
        res.status(400).json({ message: 'entered gameId not found in db' });
        return;
      } else {
        res.status(201).json({ message: 'game is deleted', gameId });
      }
    });
  } else {
    res.status(400).json({ message: 'entered  gameId is not valid', gameId });
  }
};

module.exports = {
  getAllGames: getAllGames,
  getOneGame: getOneGame,
  addOneGame: addOneGame,
  updateGame: updateGame,
  deleteGame: deleteGame,
};
