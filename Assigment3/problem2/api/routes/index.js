const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.route('/numbers/:paramNum').get(controller.multFunction);

module.exports = router;
