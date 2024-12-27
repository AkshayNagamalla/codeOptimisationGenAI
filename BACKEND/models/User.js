const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    lowercase: true
  },
  lastActive: { 
    type: Date, 
    default: Date.now 
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema);