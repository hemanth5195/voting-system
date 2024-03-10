const mongoose = require('mongoose');

// Define the Voter schema
const voterSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  voterId: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true }
});

// Create the Voter model
const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;
