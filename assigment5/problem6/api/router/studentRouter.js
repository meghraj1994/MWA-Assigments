const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router
  .route('/students')
  .get(studentController.allStudents)
  .post(studentController.addOneStudent);
router
  .route('/students/:studentId')
  .get(studentController.getOneStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteOneStudent);

module.exports = router;
