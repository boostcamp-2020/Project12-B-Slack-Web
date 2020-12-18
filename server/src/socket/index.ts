import connectionEvent from '@socket/event/connection-event';
import messageEvent from '@socket/event/message-event';
import replyEvent from '@socket/event/reply-event';
import chatroomEvent from '@socket/event/chatroom-event';
import messageReactionEvent from '@socket/event/message-reaction-event';
import disconnectEvent from '@socket/event/disconnect-event';
import replyReactionEvent from '@socket/event/reply-rection-event';

function socketIndex(io, socket) {
  connectionEvent(io, socket);
  disconnectEvent(io, socket);
  messageEvent(io, socket);
  replyEvent(io, socket);
  chatroomEvent(io, socket);
  messageReactionEvent(io, socket);
  replyReactionEvent(io, socket);
}

export default socketIndex;
