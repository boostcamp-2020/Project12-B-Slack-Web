import chatroomHandler from '@socket/handler/chatroom-handler';

const connectionEvent = (io, socket) => {
  const req = socket.request;
  console.log('새로운 클라이언트', req.user);
  chatroomHandler.joinChatroom(io, socket);
};

export default connectionEvent;
