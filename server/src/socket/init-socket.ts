import jwtMiddleware from '@socket/middleware/jwt';
import socketIndex from '@socket/index';

const initSocketIo = (io) => {
  jwtMiddleware(io);
  io.on('connection', (socket) => socketIndex(io, socket));
};

export default initSocketIo;
