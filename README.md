# 💬 Real-Time Chat Application with Socket.io

<div align="center">

![Socket.io](https://img.shields.io/badge/Socket.io-4.6.1-010101?style=for-the-badge&logo=socket.io)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=for-the-badge&logo=mongodb)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

**A production-ready, feature-rich real-time chat application built with the MERN stack and Socket.io**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [API Documentation](#-api-documentation) • [Deployment](#-deployment)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Socket Events](#-socket-events)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

A modern, full-stack real-time chat application that enables instant messaging, file sharing, and collaboration. Built with **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.io**, this application demonstrates advanced real-time communication patterns and best practices in web development.

### Why This Project?

- **Learn Real-Time Communication**: Master Socket.io and WebSocket protocols
- **Full-Stack Development**: Experience end-to-end application development
- **Production-Ready Code**: Industry-standard patterns and security practices
- **Scalable Architecture**: Modular design ready for growth

---

## ✨ Features

### 🔐 **Phase 1: Core Features**

- [x] **Real-time messaging** - Instant message delivery using Socket.io
- [x] **User authentication** - Secure JWT-based authentication system
- [x] **Global chat room** - Public chat accessible to all users
- [x] **Message timestamps** - Display when messages were sent
- [x] **Online/Offline tracking** - Real-time user presence indicators
- [x] **User registration & login** - Secure account creation and access

### 🚀 **Phase 2: Advanced Features**

- [x] **Private messaging** - One-on-one conversations between users
- [x] **Multiple chat rooms** - Create and join different channels
- [x] **Typing indicators** - See when other users are typing
- [x] **Read receipts** - Track message delivery and read status
- [x] **File/Image sharing** - Upload and share media files
- [x] **Message reactions** - React to messages with emojis
- [x] **User avatars** - Profile pictures for personalization

### 🔔 **Phase 3: Notifications**

- [x] **In-app notifications** - Real-time message alerts
- [x] **Browser notifications** - Desktop notifications with Web API
- [x] **Join/Leave notifications** - User activity announcements
- [x] **Unread message count** - Badge showing unread messages
- [x] **Sound notifications** - Audio alerts for new messages

### 💎 **Phase 4: UX & Performance**

- [x] **Message pagination** - Load older messages on demand
- [x] **Auto-reconnection** - Automatic socket reconnection on disconnect
- [x] **Message acknowledgment** - Delivery confirmation system
- [x] **Search messages** - Find messages by keyword
- [x] **Responsive design** - Optimized for mobile and desktop
- [x] **Dark mode support** - Eye-friendly theme switching
- [x] **Smooth animations** - Polished UI transitions

---

## 🛠 Tech Stack

### **Frontend**
- **React 18.2** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool
- **Socket.io Client** - Real-time bidirectional communication
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Beautiful notifications
- **Lucide React** - Modern icon library
- **date-fns** - Date formatting utilities

### **Backend**
- **Node.js 18+** - JavaScript runtime
- **Express.js** - Web application framework
- **Socket.io** - Real-time engine
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **dotenv** - Environment variable management

---

## 📁 Project Structure

```
real-time-communication-with-socket-io/
│
├── client/                          # React Frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── CreateRoomModal.jsx  # Room creation modal
│   │   │   ├── Header.jsx           # App header with user info
│   │   │   ├── Message.jsx          # Individual message component
│   │   │   ├── MessageInput.jsx     # Message compose input
│   │   │   ├── MessageList.jsx      # Messages display container
│   │   │   └── Sidebar.jsx          # Rooms and users sidebar
│   │   ├── context/                 # React Context providers
│   │   │   ├── AuthContext.jsx      # Authentication state
│   │   │   └── ChatContext.jsx      # Chat state management
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useNotifications.js  # Browser notification hook
│   │   │   ├── useScrollToBottom.js # Auto-scroll hook
│   │   │   └── useTypingIndicator.js# Typing status hook
│   │   ├── pages/                   # Page components
│   │   │   ├── Chat.jsx             # Main chat interface
│   │   │   ├── Login.jsx            # Login page
│   │   │   └── Register.jsx         # Registration page
│   │   ├── socket/                  # Socket.io client setup
│   │   │   └── socket.js            # Socket instance & config
│   │   ├── utils/                   # Utility functions
│   │   │   ├── api.js               # API client configuration
│   │   │   ├── helpers.js           # Helper functions
│   │   │   └── validation.js        # Form validation
│   │   ├── App.jsx                  # Root component
│   │   ├── index.css                # Global styles
│   │   └── main.jsx                 # App entry point
│   ├── index.html                   # HTML template
│   ├── package.json                 # Dependencies
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js           # Tailwind configuration
│   └── postcss.config.js            # PostCSS configuration
│
├── server/                          # Node.js Backend
│   ├── config/                      # Configuration files
│   │   └── database.js              # MongoDB connection
│   ├── controllers/                 # Request handlers
│   │   ├── authController.js        # Auth logic
│   │   ├── messageController.js     # Message CRUD
│   │   └── roomController.js        # Room management
│   ├── middleware/                  # Express middleware
│   │   ├── authMiddleware.js        # JWT verification
│   │   └── uploadMiddleware.js      # File upload handling
│   ├── models/                      # Mongoose schemas
│   │   ├── User.js                  # User model
│   │   ├── Message.js               # Message model
│   │   └── Room.js                  # Room model
│   ├── routes/                      # API routes
│   │   ├── authRoutes.js            # Auth endpoints
│   │   ├── messageRoutes.js         # Message endpoints
│   │   ├── roomRoutes.js            # Room endpoints
│   │   └── uploadRoutes.js          # Upload endpoints
│   ├── socket/                      # Socket.io handlers
│   │   └── socketHandlers.js        # Socket event handlers
│   ├── utils/                       # Utility functions
│   │   ├── fileUtils.js             # File operations
│   │   ├── helpers.js               # Helper functions
│   │   └── tokenUtils.js            # JWT utilities
│   ├── uploads/                     # File upload directory
│   ├── .env.example                 # Environment template
│   ├── .gitignore                   # Git ignore rules
│   ├── package.json                 # Dependencies
│   └── server.js                    # Server entry point
│
├── README.md                        # This file
└── Week5-Assignment.md              # Assignment instructions
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **MongoDB** (v6 or higher) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

### Step-by-Step Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/real-time-communication-with-socket-io-Github-Emmi.git
cd real-time-communication-with-socket-io-Github-Emmi
```

#### 2. Setup Server

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env file with your configuration
nano .env  # or use your preferred editor
```

**Configure your `.env` file:**

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/socketio-chat
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/socketio-chat

# JWT Secret (generate a strong random string)
JWT_SECRET=your_super_secret_jwt_key_here_change_this
JWT_EXPIRE=7d

# Client URL
CLIENT_URL=http://localhost:5173

# Socket.io Configuration
SOCKET_PING_TIMEOUT=60000
SOCKET_PING_INTERVAL=25000

# File Upload
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,application/pdf
```

**Start the server:**

```bash
npm run dev
```

Server will run on `http://localhost:5000`

#### 3. Setup Client

Open a new terminal window:

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

Client will run on `http://localhost:5173`

#### 4. Setup MongoDB (Local)

If using local MongoDB:

```bash
# Start MongoDB service (macOS with Homebrew)
brew services start mongodb-community

# Or for Linux
sudo systemctl start mongod

# Or for Windows, MongoDB should start automatically
```

Alternatively, use **MongoDB Atlas** (cloud database):
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get connection string and add to `.env`

---

## 🎯 Usage

### Running the Application

1. **Start MongoDB** (if using local installation)
2. **Start the server** in one terminal:
   ```bash
   cd server && npm run dev
   ```
3. **Start the client** in another terminal:
   ```bash
   cd client && npm run dev
   ```
4. **Open browser** and navigate to `http://localhost:5173`

### First Steps

1. **Register a new account** at `/register`
2. **Login** with your credentials
3. **Create or join a chat room**
4. **Start chatting!**

### Key Features Usage

#### Creating a Room
1. Click the "+" button
2. Enter room name and description
3. Choose privacy (public/private)
4. Click "Create Room"

#### Sending Messages
1. Select a room from sidebar
2. Type your message in the input field
3. Press Enter or click Send button
4. Use formatting options for rich text

#### File Sharing
1. Click the attachment icon
2. Select file (images, PDFs)
3. File uploads automatically
4. Shared with all room members

#### Private Messaging
1. Click on a user's avatar
2. Opens private chat window
3. Messages are end-to-end encrypted
4. Only visible to both parties

#### Reactions
1. Hover over any message
2. Click the emoji icon
3. Select your reaction
4. See all reactions on message

---

## 🔧 Environment Variables

### Server Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port number | `5000` | No |
| `NODE_ENV` | Environment mode | `development` | No |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/socketio-chat` | Yes |
| `JWT_SECRET` | Secret key for JWT signing | - | Yes |
| `JWT_EXPIRE` | JWT token expiration time | `7d` | No |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:5173` | Yes |
| `SOCKET_PING_TIMEOUT` | Socket timeout duration (ms) | `60000` | No |
| `SOCKET_PING_INTERVAL` | Socket ping interval (ms) | `25000` | No |
| `MAX_FILE_SIZE` | Maximum upload file size (bytes) | `5242880` | No |
| `ALLOWED_FILE_TYPES` | Allowed file MIME types | `image/jpeg,image/png,...` | No |

### Client Environment Variables

Create `.env` in `client/` directory (optional):

```env
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

---

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "username": "johndoe",
    "email": "john@example.com",
    "avatar": "default-avatar.png",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### Room Endpoints

#### Get All Rooms
```http
GET /api/rooms
Authorization: Bearer {token}
```

#### Create Room
```http
POST /api/rooms
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "General Discussion",
  "description": "A place for general chat",
  "isPrivate": false
}
```

#### Get Room Messages
```http
GET /api/messages/room/:roomId?page=1&limit=50
Authorization: Bearer {token}
```

### Message Endpoints

#### Send Message
```http
POST /api/messages
Authorization: Bearer {token}
Content-Type: application/json

{
  "content": "Hello, World!",
  "roomId": "65a1b2c3d4e5f6g7h8i9j0k1",
  "messageType": "text"
}
```

#### Upload File
```http
POST /api/upload
Authorization: Bearer {token}
Content-Type: multipart/form-data

file: [binary data]
```

---

## 🔌 Socket Events

### Client → Server Events

| Event | Payload | Description |
|-------|---------|-------------|
| `join_room` | `{ roomId }` | Join a specific chat room |
| `leave_room` | `{ roomId }` | Leave a chat room |
| `send_message` | `{ roomId, content, messageType }` | Send message to room |
| `private_message` | `{ recipientId, content }` | Send private message |
| `typing_start` | `{ roomId }` | User started typing |
| `typing_stop` | `{ roomId }` | User stopped typing |
| `add_reaction` | `{ messageId, emoji }` | Add emoji reaction |
| `mark_read` | `{ messageId }` | Mark message as read |

### Server → Client Events

| Event | Payload | Description |
|-------|---------|-------------|
| `connect` | - | Socket connected |
| `disconnect` | - | Socket disconnected |
| `receive_message` | `{ message }` | New message received |
| `private_message` | `{ message }` | New private message |
| `online_users` | `[{ userId, username }]` | Updated online users list |
| `user_typing` | `{ users }` | Users currently typing |
| `user_joined_room` | `{ userId, username, roomId }` | User joined room |
| `user_left_room` | `{ userId, username, roomId }` | User left room |
| `message_reaction` | `{ message }` | Message reaction updated |
| `message_read` | `{ messageId, userId }` | Message read receipt |
| `error` | `{ message }` | Error occurred |

---

## 🌐 Deployment

### Deploy to Heroku

#### Server Deployment

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create new app
cd server
heroku create your-chat-app-server

# Add MongoDB addon or use Atlas
heroku addons:create mongolab:sandbox
# Or set MONGODB_URI to Atlas connection string

# Set environment variables
heroku config:set JWT_SECRET=your_secret_key
heroku config:set CLIENT_URL=https://your-client-app.vercel.app

# Deploy
git subtree push --prefix server heroku main
```

#### Client Deployment (Vercel)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd client
vercel

# Set environment variables in Vercel dashboard
# VITE_API_URL=https://your-chat-app-server.herokuapp.com
```

### Deploy to Railway

1. Connect GitHub repository
2. Select `server` as root directory
3. Add environment variables
4. Deploy automatically on push

### Deploy to Render

1. Create new Web Service
2. Connect repository
3. Build command: `cd server && npm install`
4. Start command: `node server/server.js`
5. Add environment variables

---

## 🧪 Testing

### Run Server Tests

```bash
cd server
npm test
```

### Run Client Tests

```bash
cd client
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Code Style

- Follow existing code patterns
- Use ESLint and Prettier
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**GitHub Username**: Github-Emmi  
**Repository**: [real-time-communication-with-socket-io-Github-Emmi](https://github.com/PLP-MERN-Stack-Development/real-time-communication-with-socket-io-Github-Emmi)

---

## 🙏 Acknowledgments

- [Socket.io Documentation](https://socket.io/docs/v4/)
- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- PLP MERN Stack Development Program

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/PLP-MERN-Stack-Development/real-time-communication-with-socket-io-Github-Emmi/issues) page
2. Create a new issue with detailed description
3. Contact through GitHub discussions

---

## 🗺️ Roadmap

Future enhancements planned:

- [ ] Video/Voice calling
- [ ] Message editing and deletion
- [ ] User blocking and reporting
- [ ] Message search with filters
- [ ] Custom themes
- [ ] Mobile applications (React Native)
- [ ] End-to-end encryption
- [ ] Message translation
- [ ] GIF and sticker support
- [ ] Thread/Reply functionality

---

<div align="center">

**Built with ❤️ using React, Node.js, and Socket.io**

⭐ Star this repository if you found it helpful!

</div> 