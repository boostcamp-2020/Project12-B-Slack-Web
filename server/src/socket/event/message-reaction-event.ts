import messageReactionHandler from '@socket/handler/message-reaction-handler';
import eventName from '@constants/event-name';

const messageReactionEvent = (io, socket) => {
  socket.on(eventName.CREATE_REACTION, (messageReaction) => messageReactionHandler.createMessageReaction(io, socket, messageReaction));
  socket.on(eventName.DELETE_REACTION, (messageReaction) => messageReactionHandler.deleteMessageReaction(io, socket, messageReaction));
};

export default messageReactionEvent;
