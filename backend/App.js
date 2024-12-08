const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const authRoutes = require("./routes/AuthRoutes");
const resourcesRoutes = require("./routes/Resources");
const postRoutes = require("./routes/PostRoutes");
const profileRoutes = require("./routes/ProfileRoutes");

require("dotenv").config();

connectDB();
const app = express();

const allowedOrigins = [process.env.CLIENT_URL, process.env.DEV_URL];

// Allow CORS for specific origins
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", authRoutes);
app.use("/api/resources", resourcesRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/profile", profileRoutes);
// app.use("/api/posts", postRoutes);

app.get("/error", (req, res) => {
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server is running on port " + PORT);
});
