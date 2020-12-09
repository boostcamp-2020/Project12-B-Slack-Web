import replyHandler from '@socket/handler/reply-handler';
import eventName from '@constants/event-name';

const messageEvent = (io, socket) => {
  socket.on(eventName.CREATE_REPLY, (reply) => replyHandler.createReply(io, socket, reply));
  socket.on(eventName.UPDATE_REPLY, (reply) => replyHandler.updateReply(io, socket, reply));
  socket.on(eventName.DELETE_REPLY, (reply) => replyHandler.deleteReply(io, socket, reply));
};

export default messageEvent;
