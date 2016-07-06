/**
 * Created by nick on 7/6/16.
 */

// Dependencies
const restful = require('node-restful');
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   }
});

// Export Model
module.exports = restful.model('User', userSchema);