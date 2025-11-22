import { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { useAuth } from '../context/AuthContext';
import { Settings, Hash, MessageCircle } from 'lucide-react';
import RoomSettingsModal from './RoomSettingsModal';

const RoomHeader = () => {
  const { rooms, currentRoom } = useChat();
  const { user } = useAuth();
  const [showSettings, setShowSettings] = useState(false);

  const room = rooms.find((r) => r._id === currentRoom);

  if (!room) return null;

  const isAdmin = room.admins?.some((admin) => admin._id === user?._id || admin === user?._id);
  const isDirect = room.roomType === 'direct';

  // For direct messages, show the other user's name
  const getRoomName = () => {
    if (isDirect && room.members) {
      const otherMember = room.members.find((m) => m._id !== user?._id);
      return otherMember?.username || room.name;
    }
    return room.name;
  };

  const handleRoomUpdated = () => {
    // Refresh room data if needed
  };

  const handleRoomDeleted = () => {
    // Navigate away from deleted room
    window.location.reload(); // Simple approach
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {isDirect ? (
              <MessageCircle className="w-6 h-6 text-primary-500" />
            ) : (
              <Hash className="w-6 h-6 text-primary-500" />
            )}
            <div>
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                {getRoomName()}
              </h2>
              {room.description && !isDirect && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {room.description}
                </p>
              )}
              {isDirect && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Direct Message
                </p>
              )}
            </div>
          </div>

          {/* Settings button - only show for admins in group rooms */}
          {isAdmin && !isDirect && (
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              title="Room Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Room Settings Modal */}
      <RoomSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        room={room}
        onRoomUpdated={handleRoomUpdated}
        onRoomDeleted={handleRoomDeleted}
      />
    </>
  );
};

export default RoomHeader;
