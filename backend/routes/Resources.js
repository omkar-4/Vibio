const express = require('express');
const Video = require('../models/Video');
const router = express.Router();

// Route to get all video resources
router.get('/res-yt-learnanim', async (req, res) => {
  try {
    const videos = await Video.find(); // Fetch all videos from the database
    
    res.json(videos); // Send the videos array as the response
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Optional: Route to add a new video resource (POST)
router.post('/add-res-yt-learnanim', async (req, res) => {
  const { url, title, description } = req.body;

  const newVideo = new Video({
    url,
    title,
    description,
  });

  try {
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
