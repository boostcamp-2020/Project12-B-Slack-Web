import connectionEvent from '@socket/event/connection-event';
import messageEvent from '@socket/event/message-event';
import replyEvent from '@socket/event/reply-event';
import chatroomEvent from '@socket/event/chatroom-event';
import messageReactionEvent from '@socket/event/message-reaction-event';

function socketIndex(io, socket) {
  connectionEvent(io, socket);
  messageEvent(io, socket);
  replyEvent(io, socket);
  chatroomEvent(io, socket);
  messageReactionEvent(io, socket);
}

export default socketIndex;
