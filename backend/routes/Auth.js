const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, jwtSecret, {
      expiresIn: "30d",
    });
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error, please try again later",
      error: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Both email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, jwtSecret, {
      expiresIn: "30d",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
