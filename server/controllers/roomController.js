const Room = require('../models/Room');
const { errorResponse, successResponse } = require('../utils/helpers');

// Get all rooms
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isActive: true })
      .populate('creator', 'username avatar')
      .populate('lastMessage')
      .sort({ updatedAt: -1 });

    res.json(successResponse(rooms));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Get user's rooms
const getUserRooms = async (req, res) => {
  try {
    const rooms = await Room.find({
      members: req.user._id,
      isActive: true,
    })
      .populate('creator', 'username avatar')
      .populate('lastMessage')
      .populate('members', 'username avatar status')
      .sort({ updatedAt: -1 });

    res.json(successResponse(rooms));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Get room by ID
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId)
      .populate('creator', 'username avatar')
      .populate('members', 'username avatar status')
      .populate('admins', 'username avatar');

    if (!room) {
      return res.status(404).json(errorResponse('Room not found', 404));
    }

    res.json(successResponse(room));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Create new room
const createRoom = async (req, res) => {
  try {
    const { name, description, roomType } = req.body;

    const room = await Room.create({
      name,
      description,
      roomType: roomType || 'public',
      creator: req.user._id,
    });

    const populatedRoom = await Room.findById(room._id)
      .populate('creator', 'username avatar')
      .populate('members', 'username avatar');

    res.status(201).json(successResponse(populatedRoom, 'Room created'));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Update room
const updateRoom = async (req, res) => {
  try {
    const { name, description, avatar } = req.body;
    const room = await Room.findById(req.params.roomId);

    if (!room) {
      return res.status(404).json(errorResponse('Room not found', 404));
    }

    // Check if user is admin
    if (!room.admins.includes(req.user._id)) {
      return res.status(403).json(errorResponse('Not authorized', 403));
    }

    room.name = name || room.name;
    room.description = description || room.description;
    room.avatar = avatar || room.avatar;

    const updatedRoom = await room.save();

    res.json(successResponse(updatedRoom, 'Room updated'));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Join room
const joinRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);

    if (!room) {
      return res.status(404).json(errorResponse('Room not found', 404));
    }

    if (room.members.includes(req.user._id)) {
      return res.status(400).json(errorResponse('Already a member', 400));
    }

    room.members.push(req.user._id);
    await room.save();

    const updatedRoom = await Room.findById(room._id)
      .populate('members', 'username avatar');

    res.json(successResponse(updatedRoom, 'Joined room successfully'));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Leave room
const leaveRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);

    if (!room) {
      return res.status(404).json(errorResponse('Room not found', 404));
    }

    room.members = room.members.filter(
      (member) => member.toString() !== req.user._id.toString()
    );

    await room.save();

    res.json(successResponse(null, 'Left room successfully'));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

// Delete room
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);

    if (!room) {
      return res.status(404).json(errorResponse('Room not found', 404));
    }

    // Check if user is creator
    if (room.creator.toString() !== req.user._id.toString()) {
      return res.status(403).json(errorResponse('Not authorized', 403));
    }

    room.isActive = false;
    await room.save();

    res.json(successResponse(null, 'Room deleted successfully'));
  } catch (error) {
    res.status(500).json(errorResponse(error.message));
  }
};

module.exports = {
  getRooms,
  getUserRooms,
  getRoomById,
  createRoom,
  updateRoom,
  joinRoom,
  leaveRoom,
  deleteRoom,
};
