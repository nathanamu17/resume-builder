const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://natnael:1583natiatlas@resumebuilder.bds0k.mongodb.net/?retryWrites=true&w=majority&appName=ResumeBuilder"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample route to test server
app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

// Import and use resume routes
const resumeRoutes = require("./routes/resumeRoutes");
app.use("/api", resumeRoutes); // All routes in resumeRoutes will be prefixed with '/api'

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
