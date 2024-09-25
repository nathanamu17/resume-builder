const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  // Define your schema here, for example:
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  skills: {
    type: [String],
  },
  experience: {
    type: String,
  },
  education: {
    type: String,
  },
});

const Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;
