const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/Auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/vibio")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getData", (req, res) => {
  res.send(`some data, lorem ipsum dolor sit amet`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
