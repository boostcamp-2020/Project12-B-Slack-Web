import messageHandler from '@socket/handler/message-handler';
import eventName from '@constants/event-name';

const messageEvent = (io, socket) => {
  socket.on(eventName.CREATE_MESSAGE, (message) => messageHandler.createMessage(io, socket, message));
  socket.on(eventName.UPDATE_MESSAGE, (message) => messageHandler.updateMessage(io, socket, message));
  socket.on(eventName.DELETE_MESSAGE, (message) => messageHandler.deleteMessage(io, socket, message));
};

export default messageEvent;
