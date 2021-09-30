const express = require('express');
const router = express.Router();
const gameController = require('../controller');

router.route('/games').get(gameController.allGames);

//export router
module.exports = router;
