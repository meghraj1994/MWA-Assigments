const express = require('express');
const router = express.Router();
const gameController = require('../controller/gameController');

router.route('/games').get(gameController.allGames);

module.exports = router;
