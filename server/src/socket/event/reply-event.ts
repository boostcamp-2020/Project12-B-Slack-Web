import replyHandler from '@socket/handler/reply-handler';
import eventName from '@constants/event-name';

const messageEvent = (io, socket) => {
  socket.on(eventName.createReply, (reply) => replyHandler.createReply(io, socket, reply));
  socket.on(eventName.updateReply, (reply) => replyHandler.updateReply(io, socket, reply));
  socket.on(eventName.deleteReply, (reply) => replyHandler.deleteReply(io, socket, reply));
};

export default messageEvent;
