require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Import routes
const usersRouter = require('./routes/users');
const conversationsRouter = require('./routes/conversations');

// Initialize express
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/users', usersRouter);
app.use('/conversations', conversationsRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});