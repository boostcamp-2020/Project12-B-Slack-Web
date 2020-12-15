import socketHandler from '@socket/handler/socket-handler';
import eventName from '@constants/event-name';

const messageEvent = (io, socket) => {
  socket.on(eventName.DISCONNECT, () => socketHandler.deleteSocketId(io, socket));
};

export default messageEvent;
