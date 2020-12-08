import chatroomHandler from '@socket/handler/chatroom-handler';

const connectionEvent = (io, socket) => {
  chatroomHandler.joinChatroom(io, socket);
};

export default connectionEvent;
