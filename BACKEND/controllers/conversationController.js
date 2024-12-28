const Message = require('../models/Message');
const Conversation = require('../models/Conversation');
const { handleError } = require('../utils/errorHandler');

const addMessage = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const { content, isBot, parentQuestionId } = req.body;

    // Find or create conversation message document
    let message = await Message.findOne({ conversationId });
    
    if (!message) {
      message = await Message.create({
        conversationId,
        questions: []
      });
    }

    if (isBot && parentQuestionId) {
      // Add bot response to existing question
      await Message.findOneAndUpdate(
        { 
          conversationId,
          'questions._id': parentQuestionId 
        },
        { 
          $push: { 
            'questions.$.responses': {
              text: content,
              isBot: true
            }
          },
          lastUpdated: new Date()
        }
      );
    } else {
      // Add new user question
      const newQuestion = {
        text: content,
        responses: [],
        metadata: {
          type: 'text',
          attachments: []
        }
      };
      
      await Message.findByIdAndUpdate(
        message._id,
        { 
          $push: { questions: newQuestion },
          lastUpdated: new Date()
        }
      );
    }

    // Get updated message
    const updatedMessage = await Message.findOne({ conversationId });
    
    await Conversation.findByIdAndUpdate(
      conversationId, 
      { updatedAt: new Date() }
    );

    res.status(201).json(updatedMessage);
  } catch (error) {
    handleError(res, error);
  }
};

const getMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const messages = await Message.findOne({ conversationId })
      .sort({ lastUpdated: -1 });
    res.json(messages);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  addMessage,
  getMessages
};
