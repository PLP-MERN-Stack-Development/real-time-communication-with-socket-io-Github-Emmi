const Message = require('../models/Message');
const Room = require('../models/Room');
const { errorResponse, successResponse } = require('../utils/helpers');

// Get messages for a room
const getRoomMessages = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { limit = 50, skip = 0 } = req.query;

    const messages = await Message.find({ room: roomId })
      .populate('sender', 'username avatar')
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(skip));

    res.json(successResponse(messages.reverse()));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Get private messages between two users
const getPrivateMessages = async (req, res) => {
  try {
    const { userId } = req.params;
    const { limit = 50, skip = 0 } = req.query;

    const messages = await Message.find({
      $or: [
        { sender: req.user._id, recipient: userId },
        { sender: userId, recipient: req.user._id },
      ],
      room: null,
    })
      .populate('sender', 'username avatar')
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(skip));

    res.json(successResponse(messages.reverse()));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Create a new message
const createMessage = async (req, res) => {
  try {
    const { content, room, recipient, messageType, fileUrl, fileName, fileSize } = req.body;

    const message = await Message.create({
      sender: req.user._id,
      content,
      room: room || null,
      recipient: recipient || null,
      messageType: messageType || 'text',
      fileUrl: fileUrl || null,
      fileName: fileName || null,
      fileSize: fileSize || null,
    });

    const populatedMessage = await Message.findById(message._id)
      .populate('sender', 'username avatar');

    // Update room's last message
    if (room) {
      await Room.findByIdAndUpdate(room, { lastMessage: message._id });
    }

    res.status(201).json(successResponse(populatedMessage, 'Message sent'));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Add reaction to message
const addReaction = async (req, res) => {
  try {
    const { messageId } = req.params;
    const { emoji } = req.body;

    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json(errorResponse('Message not found', 404));
    }

    // Check if user already reacted with this emoji
    const existingReaction = message.reactions.find(
      (r) => r.user.toString() === req.user._id.toString() && r.emoji === emoji
    );

    if (existingReaction) {
      // Remove reaction
      message.reactions = message.reactions.filter(
        (r) => !(r.user.toString() === req.user._id.toString() && r.emoji === emoji)
      );
    } else {
      // Add reaction
      message.reactions.push({
        user: req.user._id,
        emoji,
      });
    }

    await message.save();

    const updatedMessage = await Message.findById(messageId)
      .populate('sender', 'username avatar')
      .populate('reactions.user', 'username');

    res.json(successResponse(updatedMessage, 'Reaction updated'));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Mark message as read
const markAsRead = async (req, res) => {
  try {
    const { messageId } = req.params;

    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json(errorResponse('Message not found', 404));
    }

    // Check if already read
    const alreadyRead = message.readBy.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (!alreadyRead) {
      message.readBy.push({ user: req.user._id });
      await message.save();
    }

    res.json(successResponse(message, 'Message marked as read'));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Search messages
const searchMessages = async (req, res) => {
  try {
    const { query, roomId } = req.query;

    const searchCriteria = {
      content: { $regex: query, $options: 'i' },
    };

    if (roomId) {
      searchCriteria.room = roomId;
    }

    const messages = await Message.find(searchCriteria)
      .populate('sender', 'username avatar')
      .limit(50)
      .sort({ createdAt: -1 });

    res.json(successResponse(messages));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

module.exports = {
  getRoomMessages,
  getPrivateMessages,
  createMessage,
  addReaction,
  markAsRead,
  searchMessages,
};
