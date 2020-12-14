import SocketService from '@service/socket-service';

const socketHandler = {
  async saveSocketId(io, socket) {
    const req = socket.request;
    const { userId } = req.user;
    const socketId = socket.id;
    SocketService.getInstance().createSocket(userId, socketId);
  },

  async deleteSocketId(io, socket) {
    const socketId = socket.id;
    SocketService.getInstance().deleteSocket(socketId);
  }
};

export default socketHandler;
