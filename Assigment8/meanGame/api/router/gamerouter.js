const express = require('express');
const gamecontroller = require('../controller/gamecontroller');
const router = express.Router();

// games routers which doesnot needID
router
  .route('/games')
  .get(gamecontroller.getAllGames)
  .post(gamecontroller.addOneGame);

//games router which need ID
router
  .route('/games/:gameId')
  .get(gamecontroller.getOneGame)
  .put(gamecontroller.updateGame)
  .delete(gamecontroller.deleteGame);

module.exports = router;
