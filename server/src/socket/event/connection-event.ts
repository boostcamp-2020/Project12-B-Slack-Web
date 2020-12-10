import chatroomHandler from '@socket/handler/chatroom-handler';

const connectionEvent = (io, socket) => {
  chatroomHandler.loginJoinChatroom(io, socket);
};

export default connectionEvent;
