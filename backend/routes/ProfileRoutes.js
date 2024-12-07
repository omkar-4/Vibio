const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/getuserdata", async (req, res) => {
  // send user data to the profile page after verification of login
  const user = await User.findById(req.user._id);
  res.json(user);
  // req.user contains the user's data stored in the JWT token
});

module.exports = router;