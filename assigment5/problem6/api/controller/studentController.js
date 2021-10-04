const { query, request } = require('express');
const mongoose = require('mongoose');
const Students = mongoose.model('Student');

//geting all students
const allStudents = function (req, res) {
  // console.log('get all games');
  var offset = 0;
  var count = 8;
  var maxCount = 9;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
    console.log('offset is', offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
    console.log('count is', count);
  }
  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({ message: 'Query string offset and count should be numbers' });
    return;
  }
  if (count > maxCount) {
    res.status(500).json({ message: 'cannot exceed maxCount of' + maxCount });
    return;
  }
  Students.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, students) {
      if (err) {
        console.log('error finding students');
        res.status(500).json(err);
      } else {
        console.log('Query game found', students.length);
        res.status(200).json(students);
      }
    });
};

//getting one student
const getOneStudent = function (req, res) {
  // console.log('one game controller');
  var studentId = req.params.studentId;
  if (mongoose.isValidObjectId(req.params.studentId)) {
    Students.findById(studentId).exec(function (err, student) {
      if (err) {
        res.status(500).json({ message: 'error in finding student', err });
      } else if (!student) {
        res
          .status(404)
          .json({ message: 'entered studentId not found in database' });
      } else {
        console.log('one student Found');
        res.status(200).json(student);
      }
    });
  } else {
    console.log('Please Enter valid studentId', studentId);
    res
      .status(400)
      .json({ message: 'entered studentId is not valid' + studentId });
    return;
  }
};

//adding game
const addOneStudent = function (req, res) {
  Students.create(
    {
      name: req.body.name,
      gpa: parseFloat(req.body.gpa),
    },
    function (err, student) {
      if (err) {
        console.log('Error adding student');
        res.status(400).json(err);
      } else {
        console.log('student added', student);
        res.status(201).json(student);
      }
    }
  );
};

//updating student
const updateStudent = function (req, res) {
  console.log('updating student......');
  var studentId = req.params.studentId;
  if (mongoose.isValidObjectId(req.params.studentId)) {
    Students.findById(studentId).exec(function (err, student) {
      if (err) {
        res.send(500).json({ message: 'error in fetching student' });
      } else if (!student) {
        res.status(400).json({ message: 'entered student is not found' });
      } else {
        (student.name = req.body.name),
          (student.gpa = parseFloat(req.body.gpa)),
          student.save(function (err, updatedStudent) {
            if (err) {
              res.status(500).json({ message: ' server error', err });
            } else {
              res.status(201).json({ message: 'student updated', student });
            }
          });
      }
    });
  } else {
    res.status(400).json({
      message: 'entered studentId is not valid,please enter valid gameId',
    });
    return;
  }
};

//deleting game
const deleteOneStudent = function (req, res) {
  var studentId = req.params.studentId;
  console.log(studentId);
  if (mongoose.isValidObjectId(req.params.studentId)) {
    Students.findByIdAndRemove(studentId).exec(function (err, student) {
      if (err) {
        res.status(500).json({ message: 'error in fetching student' });
        return;
      } else if (!student) {
        res
          .status(400)
          .json({ message: 'eneterd studentId not found', studentId });
      } else {
        res.status(201).json({ message: 'student deleted' });
      }
    });
  } else {
    res
      .status(400)
      .json({ message: 'entered studentId is invalid', studentId });
    return;
  }
};

module.exports = {
  allStudents: allStudents,
  getOneStudent: getOneStudent,
  addOneStudent: addOneStudent,
  updateStudent: updateStudent,
  deleteOneStudent: deleteOneStudent,
};
