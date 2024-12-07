const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  filePath: { type: String, required: true },
  originalName: { type: String, required: true },
  size: { type: Number, required: true },
  type: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("File", fileSchema);