const { query } = require('express');
const mongoose = require('mongoose');
const student = mongoose.model('Student');

const allStudent = function (req, res) {
  console.log('all students method');
  var offset = 0;
  var count = 4;
  var maxCount = 4;
  console.log(req.query);
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
  }
  if (isNaN(offset) || isNaN(maxCount)) {
    res
      .status(400)
      .json({ message: 'query string offset and count should be number' });
    return;
  }
  if (count > maxCount) {
    res.json(400).json({ message: 'count should be less than the maxCount' });
    return;
  }

  student
    .find()
    .skip(offset)
    .limit(count)
    .exec(function (err, game) {
      if (err) {
        res.status(500).json({ message: 'error fetching students' });
      } else {
        res.status(200).json(game);
      }
    });
};

const getOne = function (req, res) {
  let studentId = req.params.studentId;

  if (mongoose.isValidObjectId(req.params.studentId)) {
    student.findById(studentId).exec(function (err, student) {
      if (err) {
        res.send(500).json({ message: 'internal server error' });
      } else if (!student) {
        res
          .status(404)
          .json({ message: 'entered studentId is not found in database' });
      } else {
        res.status(200).json(student);
      }
    });
  } else {
    res
      .status(400)
      .json({ message: 'entered studentID is not valid', studentId });
  }
};

module.exports = {
  allStudent: allStudent,
  getOne: getOne,
};
