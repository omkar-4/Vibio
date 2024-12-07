const multer = require("multer");
const path = require("path");
const fs = require("fs");

const memoryStorage = multer.memoryStorage();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const userFolder = path.join("uploads", req.user.id.toString());

    fs.mkdirSync(path.join(__dirname, userFolder), { recursive: true });
    cb(null, userFolder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });
const uploadImage = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  },
});

module.exports = { upload, uploadImage, memoryStorage, storage };
