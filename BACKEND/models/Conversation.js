const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true // Add index for better query performance
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Conversation', conversationSchema);