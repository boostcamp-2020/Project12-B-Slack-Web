import chatroomHandler from '@socket/handler/chatroom-handler';
import eventName from '@constants/event-name';

const chatroomEvent = (io, socket) => {
  socket.on(eventName.JOIN_CHATROOM, (chatroom) => chatroomHandler.joinChatroom(io, socket, chatroom));
  socket.on(eventName.JOIN_DM, (DirectMessage) => chatroomHandler.joinDM(io, socket, DirectMessage));
};

export default chatroomEvent;
