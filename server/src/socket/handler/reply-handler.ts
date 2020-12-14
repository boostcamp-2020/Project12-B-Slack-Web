import ReplyService from '@service/reply-service';
import eventName from '@constants/event-name';

const replyHandler = {
  async createReply(io, socket, reply) {
    const req = socket.request;
    const { userId } = req.user;
    const { messageId, content } = reply;
    const replyId = await ReplyService.getInstance().createReply(userId, messageId, content);
    const newReply = await ReplyService.getInstance().getReply(replyId);
    const replyInfo = await ReplyService.getInstance().getReplyInfo(replyId);
    const { chatroomId } = replyInfo.message.chatroom;
    io.to(String(chatroomId)).emit(eventName.CREATE_REPLY, { ...newReply, chatroomId, messageId });
  },

  async updateReply(io, socket, reply) {
    const { replyId, content, messageId } = reply;
    await ReplyService.getInstance().updateReply(replyId, content);
    const replyInfo = await ReplyService.getInstance().getReplyInfo(replyId);
    const { chatroomId } = replyInfo.message.chatroom;
    io.to(String(chatroomId)).emit(eventName.UPDATE_REPLY, { replyId, content, chatroomId, messageId });
  },

  async deleteReply(io, socket, reply) {
    const { replyId } = reply;
    const replyInfo = await ReplyService.getInstance().getReplyInfo(replyId);
    const { messageId } = replyInfo.message;
    const { chatroomId } = replyInfo.message.chatroom;
    await ReplyService.getInstance().deleteReply(replyId);
    io.to(String(chatroomId)).emit(eventName.DELETE_REPLY, { replyId, messageId, chatroomId });
  }
};

export default replyHandler;
