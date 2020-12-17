import ReplyReactionService from '@service/reply-reaction-service';
import eventName from '@constants/event-name';

const replyHandler = {
  async createReplyReaction(io, socket, messageReaction) {
    const req = socket.request;
    const { userId } = req.user;
    const { chatroomId, replyId, title, emoji } = messageReaction;
    const newReplyReaction = await ReplyReactionService.getInstance().createReplyReaction(Number(userId), Number(replyId), title, emoji);
    io.to(String(chatroomId)).emit(eventName.CREATE_REPLY_REACTION, { ...newReplyReaction, chatroomId });
  }
};

export default replyHandler;
