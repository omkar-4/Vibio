const router = require("express").Router();
const Post = require("../models/Post");

router.post("/create", async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = new Post({ title, content, userId: req.user.id });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: "Error creating post", error: err.message });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Error fetching post", error: err });
  }
});

router.post("/:postId/comment", async (req, res) => {
  const { comment } = req.body;
  const postId = req.params.postId;

  try {
    const newComment = new Comment({ postId, text: comment, userId: req.user.id });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: "Error adding comment", error: err });
  }
});

module.exports = router;
