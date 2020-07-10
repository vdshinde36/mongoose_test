const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HackerNews = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    requied: true,
  },
  author: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
    default: 0,
  },
  created_at: {
    type: Date,
  }
});

module.exports = mongoose.model('HackerNews', HackerNews);