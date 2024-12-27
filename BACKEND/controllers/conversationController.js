const Message = require('../models/Message');
const Conversation = require('../models/Conversation');
const { handleError } = require('../utils/errorHandler');

const addMessage = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const { content, isBot } = req.body;

    const message = await Message.create({
      conversationId,
      content,
      isBot
    });

    await Conversation.findByIdAndUpdate(
      conversationId, 
      { updatedAt: new Date() }
    );

    res.status(201).json(message);
  } catch (error) {
    handleError(res, error);
  }
};

const getMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const messages = await Message.find({ conversationId })
      .sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  addMessage,
  getMessages
};