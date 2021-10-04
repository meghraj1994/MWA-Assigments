const express = require('express');
const router = express.Router();
const gameController = require('../controller/gamecontroller');

router.route('/games').get(gameController.allGames);
router.route('/games/:gameId').get(gameController.oneGame);

module.exports = router;
