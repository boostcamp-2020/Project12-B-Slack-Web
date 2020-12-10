import chatroomHandler from '@socket/handler/chatroom-handler';
import eventName from '@constants/event-name';

const messageEvent = (io, socket) => {
  socket.on(eventName.JOIN_CHATROOM, (chatroom) => chatroomHandler.joinChatroom(io, socket, chatroom));
};

export default messageEvent;
