const router = express.Router();
const User = require("../models/User");


router.put("/", authMiddleware, async (req, res) => {
  const { commonName, bio, password } = req.body;
  const updates = {};
  if (commonName) updates.commonName = commonName;
  if (bio) updates.bio = bio;
  if (password) updates.password = await bcrypt.hash(password, 10);

  try {
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Error updating profile", error: err.message });
  }
});
