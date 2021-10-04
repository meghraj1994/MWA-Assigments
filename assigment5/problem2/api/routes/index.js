const express = require('express');
const studentController = require('../controller/studentController');
const router = express.Router();

router.route('/students').get(studentController.allStudent);
router.route('/students/:studentId').get(studentController.getOne);


module.exports = router;
