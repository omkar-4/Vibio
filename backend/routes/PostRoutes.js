// routes/postRoutes.js
const express = require("express");
const Post = require("../models/PostModel");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const User = require("../models/User");

router.get("/getposts", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const posts = await Post.find().populate("user", "commonName").sort({ createdAt: -1 }).skip(skip).limit(limit);
    const totalPosts = await Post.countDocuments();
    res.status(200).json({ posts: posts || [], totalPages: Math.ceil(totalPosts / limit) });
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err.message });
  }
});

router.post("/createpost", upload.single("image"), async (req, res) => {
  const { caption, userId } = req.body;

  const user = await User.findById(userId);
  if (!user) return res.status(400).json({ message: "User not found" });

  const imageUrl = `/uploads/${req.file.filename}`; // Assuming the image is uploaded

  try {
    const newPost = new Post({ user: userId, image: imageUrl, caption });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: "Error creating post", error: err.message });
  }
});

// routes/postRoutes.js
router.post("/like/:id", async (req, res) => {
  const postId = req.params.id;
  const userId = req.body.userId; // Get user ID from request body

  try {
    const post = await Post.findById(postId);
    if (post.likes.includes(userId)) {
      return res.status(400).json({ message: "Post already liked" });
    }
    post.likes.push(userId);
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error liking post", error: err.message });
  }
});

module.exports = router;
