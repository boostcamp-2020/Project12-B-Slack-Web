import messageHandler from '@socket/handler/message-handler';

const messageEvent = (io, socket) => {
  socket.on('create message', (message) => messageHandler.createMessage(io, socket, message));
  socket.on('update message', (message) => messageHandler.updateMessage(io, socket, message));
  socket.on('delete message', (message) => messageHandler.deleteMessage(io, socket, message));
};

export default messageEvent;
