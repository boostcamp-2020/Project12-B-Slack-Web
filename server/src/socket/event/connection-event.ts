import chatroomHandler from '@socket/handler/chatroom-handler';

const connectionEvent = (io, socket) => {
  chatroomHandler.initJoinChatroom(io, socket);
};

export default connectionEvent;
