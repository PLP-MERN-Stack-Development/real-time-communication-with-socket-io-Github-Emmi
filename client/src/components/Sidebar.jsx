import { useChat } from '../context/ChatContext';
import { formatRelativeTime } from '../utils/helpers';
import { Users, Hash } from 'lucide-react';

const Sidebar = () => {
  const { rooms, currentRoom, joinRoom, onlineUsers } = useChat();

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">ChatIO</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {onlineUsers.length} online
        </p>
      </div>

      {/* Rooms list */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
            Rooms
          </h3>
          <div className="space-y-1">
            {rooms.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                No rooms yet
              </p>
            ) : (
              rooms.map((room) => (
                <button
                  key={room._id}
                  onClick={() => joinRoom(room._id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    currentRoom === room._id
                      ? 'bg-primary-500 text-white'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Hash className="w-4 h-4" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{room.name}</div>
                      {room.lastMessage && (
                        <div className="text-xs opacity-75 truncate">
                          Last activity: {formatRelativeTime(room.updatedAt)}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Online users */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2 flex items-center">
            <Users className="w-3 h-3 mr-1" />
            Online ({onlineUsers.length})
          </h3>
          <div className="space-y-2">
            {onlineUsers.map((user) => (
              <div
                key={user.userId}
                className="flex items-center space-x-2 text-sm"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 truncate">
                  {user.username}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
