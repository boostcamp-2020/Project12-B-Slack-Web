import MessageReactionService from '@service/message-reaction-service';
import MessageServie from '@service/message-service';
import eventName from '@constants/event-name';

const messageHandler = {
  async createMessageReaction(io, socket, messageReaction) {
    const req = socket.request;
    const { userId } = req.user;
    const { messageId, title, emoji } = messageReaction;
    const newMessageReaction = await MessageReactionService.getInstance().createMessageReaction(Number(userId), Number(messageId), title, emoji);
    const { chatroomId } = (await MessageServie.getInstance().getMessage(messageId)).chatroom;
    io.to(String(chatroomId)).emit(eventName.CREATE_REACTION, { ...newMessageReaction, chatroomId });
  }
};

export default messageHandler;
