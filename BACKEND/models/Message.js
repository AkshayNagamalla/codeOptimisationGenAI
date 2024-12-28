const mongoose = require('mongoose');


const responseSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  isBot: {
    type: Boolean,
    default: false
  }
});

// Define the question subdocument schema
const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  responses: [responseSchema],
  metadata: {
    timestamp: {
      type: Date,
      default: Date.now
    },
    type: {
      type: String,
      enum: ['text', 'image', 'file'],
      default: 'text'
    },
    attachments: [{
      url: String,
      name: String,
      mimeType: String
    }]
  }
});

const messageSchema = new mongoose.Schema({
  conversationId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Conversation', 
    required: true,
    index: true
  },
  questions: [questionSchema],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, { 
  timestamps: true 
});

// Index for efficient querying
messageSchema.index({ conversationId: 1, lastUpdated: -1 });

module.exports = mongoose.model('Message', messageSchema);
