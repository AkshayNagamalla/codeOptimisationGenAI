const express = require('express');
const router = express.Router();
const { 
  addMessage, 
  getMessages 
} = require('../controllers/conversationController');

router.post('/:conversationId/messages', addMessage);
router.get('/:conversationId', getMessages);

module.exports = router;