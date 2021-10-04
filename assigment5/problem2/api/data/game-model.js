const mongoose = require('mongoose');
const studentScema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  gpa: Number,
});

mongoose.model('Student', studentScema, 'students');
