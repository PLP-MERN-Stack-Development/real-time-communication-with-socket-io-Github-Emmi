const express = require('express');
const {
  getRooms,
  getUserRooms,
  getRoomById,
  createRoom,
  updateRoom,
  joinRoom,
  leaveRoom,
  deleteRoom,
} = require('../controllers/roomController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getRooms);
router.get('/my-rooms', protect, getUserRooms);
router.get('/:roomId', protect, getRoomById);
router.post('/', protect, createRoom);
router.put('/:roomId', protect, updateRoom);
router.post('/:roomId/join', protect, joinRoom);
router.post('/:roomId/leave', protect, leaveRoom);
router.delete('/:roomId', protect, deleteRoom);

module.exports = router;
