const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: Number,
  designers: [String],
  players: {
    type: Number,
    min: 1,
    max: 10,
  },
  rate: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },
});

//this is add gameSchema to mongoose, we can access this scema anywhere using mangoose.model("Game")
mongoose.model('Game', gameSchema, 'games');
