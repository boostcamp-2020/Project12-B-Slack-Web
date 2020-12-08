import connectionEvent from '@socket/event/connection-event';
import messageEvent from '@socket/event/message-event';
import replyEvent from '@socket/event/reply-event';


function socketIndex(io, socket) {
  connectionEvent(io, socket);
  messageEvent(io, socket);
  replyEvent(io, socket);

}

export default socketIndex;
