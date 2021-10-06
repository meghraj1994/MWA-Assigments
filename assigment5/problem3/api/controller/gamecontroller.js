const { query, request } = require('express');
const mongoose = require('mongoose');
const Games = mongoose.model('Game');

//geting all games
const allGames = function (req, res) {
  // console.log('get all games');
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
  Games.find()
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

//getting one game
const oneGame = function (req, res) {
  // console.log('one game controller');
  var gameId = req.params.gameId;
  if (mongoose.isValidObjectId(req.params.gameId)) {
    Games.findById(gameId).exec(function (err, game) {
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

//adding game
const gamesAddOne = function (req, res) {
  // const newGame = {
  //   title: req.body.title,
  //   year: parseInt(req.body.year),
  //   price: parseFloat(req.body.price),
  //   designer: req.body.designer,
  //   minPlayers: parseInt(req.body.minPlayers),
  //   maxPlayers: parseInt(req.body.maxPlayers),
  //   rate: parseFloat(req.body.rate || 1),
  // };
  console.log(req.body.title); 
  res.send('sdfd');
  return;
  Games.create(newGame, function (err, game) {
    if (err) {
      console.log('Error creating games');
      res.status(400).json(err);
    } else {
      console.log('Game created', game);
      res.status(201).json(game);
    }
  });
};

//updating game
const gameUpdateOne = function (req, res) {
  console.log('updating games');
  var gameId = req.params.gameId;
  if (mongoose.isValidObjectId(req.params.gameId)) {
    Games.findById(gameId).exec(function (err, game) {
      if (err) {
        res.send(500).json({ message: 'error in fetching game' });
      } else if (!game) {
        res.status(400).json({ message: 'entered gameId is not found' });
      } else {
        console.log(req.body.title);
        (game.title = req.body.title), console.log(Games.title);
        (game.price = parseFloat(req.body.price)),
          (game.designer = req.body.designer);
        game.rate = parseFloat(req.body.rate);
        game.save(function (err, updateGame) {
          if (err) {
            res.status(500).json({ message: ' server error', err });
          } else {
            res.status(201).json({ message: 'game updated', game });
          }
        });
      }
    });
  } else {
    res.status(400).json({
      message: 'entered gameId is not valid,please enter valid gameId',
    });
    return;
  }
};

//deleting game
const gamesDeleteOne = function (req, res) {
  var gameId = req.params.gameId;
  console.log(gameId);
  if (mongoose.isValidObjectId(req.params.gameId)) {
    Games.findByIdAndRemove(gameId).exec(function (err, game) {
      if (err) {
        res.status(500).json({ message: 'error in fetching game' });
        return;
      } else if (!game) {
        res.status(400).json({ message: 'eneterd gameId not found', gameId });
      } else {
        res.status(201).json({ message: 'game deleted' });
      }
    });
  } else {
    res.status(400).json({ message: 'entered gameId is invalid', gameId });
    return;
  }
};

module.exports = {
  allGames: allGames,
  oneGame: oneGame,
  addOne: gamesAddOne,
  gameUpdateOne: gameUpdateOne,
  gamesDeleteOne: gamesDeleteOne,
};
