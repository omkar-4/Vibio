const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
