// ./models/User.js

// Define your User model here...
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // Define your user schema fields here...
});

const User = mongoose.model('User', userSchema);

module.exports = User;
