import { Server } from 'socket.io';
// import UserChatroomService from '@service/user-chatroom-service';
// import MessageService from '@service/message-service';

const Socket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });
  return io;
};

export default Socket;
