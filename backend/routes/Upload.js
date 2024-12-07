const router = express.Router();
const upload = require("../config/multer");
const File = require("../models/File");

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const newFile = new File({
      userId: req.user.id,
      filePath: req.file.path,
      originalName: req.file.originalname,
      size: req.file.size,
      type: req.file.mimetype,
    });

    await newFile.save();
    res.json({ message: "File uploaded successfully", filePath: req.file.path });
  } catch (err) {
    res.status(500).json({ message: "Error uploading file", error: err.message });
  }
});

module.exports = router;
