const express = require('express');
const router = express.Router();
const gameController = require('../controller/gamecontroller');

router.route('/games').get(gameController.allGames).post(gameController.addOne);
router
  .route('/games/:gameId')
  .get(gameController.oneGame)
  .put(gameController.gameUpdateOne)
  .delete(gameController.gamesDeleteOne);

module.exports = router;
