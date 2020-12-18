import chatroomHandler from '@socket/handler/chatroom-handler';
import socketHandler from '@socket/handler/socket-handler';

const connectionEvent = (io, socket) => {
  chatroomHandler.initJoinChatroom(io, socket);
  socketHandler.saveSocketId(io, socket);
};

export default connectionEvent;
