# codeOptimisationGenAI
This project is to create a generative AI solution for code optimization and generation.

Team G210 PS 3-1
members:
Akshay nagamalla
Srinidhi 
Sharvani
Vaishnavi
Hemanth
pardiv


# Backend Connection README

## Overview
This backend application provides a robust setup for user management and conversational messaging. It is built with Node.js, Express, and MongoDB. Below are details of the architecture, file structure, and how to use the API.

---

## File Structure and Functionality

### 1. `index.js` - Entry Point of the Application
- Sets up the Express server.
- Connects to MongoDB using the configuration in `config/db.js`.
- Registers routes for user and conversation-related operations.
- Starts the server on a specified port (default: 3000).

### 2. Configuration
#### `config/db.js` - Handles MongoDB Connection
- Establishes a connection to MongoDB using Mongoose.
- Includes error handling for potential connection issues.

### 3. Models
#### `models/User.js` - User Schema
- Defines the structure for user data:
  - `username`: String
  - `email`: String
  - `lastActive`: Date (automatically updated via timestamps).
- Includes timestamps for tracking creation and updates.

#### `models/Conversation.js` - Conversation Schema
- Links conversations to users.
- Tracks conversation timestamps (creation and updates).

#### `models/Message.js` - Message Schema
- Stores message content.
- Links messages to conversations.
- Tracks whether a message is from a bot.

### 4. Controllers
#### `controllers/userController.js` - User-Related Logic
- Handles user creation.
- Creates an initial conversation for newly registered users.

#### `controllers/conversationController.js` - Conversation and Message Logic
- Adds new messages to conversations.
- Retrieves messages from a conversation.

### 5. Routes
#### `routes/users.js` - User Endpoints
- `POST /users`: Creates a new user.

#### `routes/conversations.js` - Conversation Endpoints
- `POST /:conversationId/messages`: Adds a new message to a conversation.
- `GET /:conversationId`: Retrieves messages for a specific conversation.

### 6. Utilities
#### `utils/errorHandler.js` - Error Handling
- Standardizes error responses.
- Logs errors to aid in debugging.

---

## Running the Application

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance running locally or accessible via a connection string.
- `.env` file with appropriate configurations (e.g., `PORT`, `MONGO_URI`).

### Steps to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
   The server will run on port `3000` or the port specified in `.env`.

---

## API Usage

### 1. Create User
**Endpoint:** `POST /users`

**Request Body:**
```json
{
  "username": "testuser",
  "email": "test@example.com"
}
```

**Response:**
- Status `201`: User created successfully.
- Status `400`: Bad request (e.g., missing fields).

### 2. Add Message
**Endpoint:** `POST /conversations/:conversationId/messages`

**Request Body:**
```json
{
  "content": "Hello world",
  "isBot": false
}
```

**Response:**
- Status `201`: Message added successfully.
- Status `404`: Conversation not found.

### 3. Get Messages
**Endpoint:** `GET /conversations/:conversationId`

**Response:**
- Status `200`: Returns an array of messages for the conversation.
- Status `404`: Conversation not found.

---

## Testing the API
Use tools like **Thunder Client**, **Postman**, or **cURL** to test the API endpoints.

Example requests:
- Create a user:
  ```bash
  curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "email": "test@example.com"}'
  ```
- Add a message:
  ```bash
  curl -X POST http://localhost:3000/conversations/<conversationId>/messages \
  -H "Content-Type: application/json" \
  -d '{"content": "Hello world", "isBot": false}'
  ```
- Get messages:
  ```bash
  curl -X GET http://localhost:3000/conversations/<conversationId>
  ```

---

## Additional Notes
- Ensure MongoDB is running and accessible before starting the server.
- Logs and errors are captured using the `utils/errorHandler.js` utility for easier debugging.

For further assistance, feel free to reach out or consult the application documentation!
