const mongoose = require('mongoose');

// Define the Admin schema
const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  securityCode: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
});

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
