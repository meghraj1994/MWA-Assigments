const express = require('express');
const router = express.Router();
const gameController = require('../controller');

router
  .route('/games')
  .get(gameController.queryGames)
  .post(gameController.addOne);
router.route('/games/:gameId').get(gameController.oneGame);

//export router
module.exports = router;
