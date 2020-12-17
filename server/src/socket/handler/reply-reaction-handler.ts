import ReplyReactionService from '@service/reply-reaction-service';
import ReplyService from '@service/reply-service';
import eventName from '@constants/event-name';

const replyHandler = {
  async createReplyReaction(io, socket, messageReaction) {
    const req = socket.request;
    const { userId } = req.user;
    const { chatroomId, replyId, title, emoji } = messageReaction;
    const newReplyReaction = await ReplyReactionService.getInstance().createReplyReaction(Number(userId), Number(replyId), title, emoji);
    const { messageId } = (await ReplyService.getInstance().getReplyInfo(Number(replyId))).message;
    io.to(String(chatroomId)).emit(eventName.CREATE_REPLY_REACTION, { ...newReplyReaction, messageId, chatroomId });
  },

  async deleteReplytReaction(io, socket, replyReaction) {
    const req = socket.request;
    const { userId } = req.user;
    const { replyId, reactionId, chatroomId } = replyReaction;
    await ReplyReactionService.getInstance().deleteReplyReaction(Number(userId), Number(replyId), Number(reactionId));
    const newReplyReaction = await ReplyReactionService.getInstance().getReplyReaction(Number(replyId), Number(reactionId));
    const { messageId } = (await ReplyService.getInstance().getReplyInfo(Number(replyId))).message;
    io.to(String(chatroomId)).emit(eventName.DELETE_REPLY_REACTION, { ...newReplyReaction, messageId, chatroomId });
  }
};

export default replyHandler;
