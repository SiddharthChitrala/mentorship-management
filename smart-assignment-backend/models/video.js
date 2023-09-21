const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  name: String,
  path: String,
});

module.exports = mongoose.model('Video', videoSchema);
