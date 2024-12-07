const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB, Retrying in 5 seconds", err);
    setTimeout(connectDB, 10000);
  }
};

module.exports = connectDB;
