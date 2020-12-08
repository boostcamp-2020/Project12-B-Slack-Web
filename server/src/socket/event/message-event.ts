import messageHandler from '@socket/handler/message-handler';
import eventName from '@constants/event-name';

const messageEvent = (io, socket) => {
  socket.on(eventName.createMessage, (message) => messageHandler.createMessage(io, socket, message));
  socket.on(eventName.updateMessage, (message) => messageHandler.updateMessage(io, socket, message));
  socket.on(eventName.deleteMessage, (message) => messageHandler.deleteMessage(io, socket, message));
};

export default messageEvent;
