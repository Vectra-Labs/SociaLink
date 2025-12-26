const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SociaLink API" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!", status: "success" });
});

// Server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
