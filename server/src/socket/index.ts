import connectionEvent from '@socket/event/connection-event';
import messageEvent from './event/message-event';

function socketIndex(io, socket) {
  connectionEvent(io, socket);
  messageEvent(io, socket);
}

export default socketIndex;
