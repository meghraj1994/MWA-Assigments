const mongoose = require('mongoose');

// const publisherShcema = new mongoose.Schema({
//   name: String,
//   location: {
//     type: {
//       type: String,
//     },
//     coordinates: float,
//     float,
//   },
// });
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
  //   publisher: publisherShcema,
  rate: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },
});

mongoose.model('Game', gameSchema, 'games');
