const User = require('../models/User');
const Conversation = require('../models/Conversation');
const { handleError } = require('../utils/errorHandler');

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    
    // Create user
    const user = await User.create({ username, email });
    
    // Create initial conversation
    const conversation = await Conversation.create({ userId: user._id });
    
    res.status(201).json({ user, conversation });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  createUser
};