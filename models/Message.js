const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  conversationId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Conversation', 
    required: true,
    index: true // Add index for better query performance
  },
  content: { 
    type: String, 
    required: true,
    trim: true
  },
  isBot: { 
    type: Boolean, 
    default: false 
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Message', messageSchema);