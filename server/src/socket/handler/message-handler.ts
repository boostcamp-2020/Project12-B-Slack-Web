import MessageService from '@service/message-service';
import eventName from '@constants/event-name';

const messageHandler = {
  async createMessage(io, socket, message) {
    const req = socket.request;
    const { chatroomId, content } = message;
    const { userId } = req.user;
    const messageId = await MessageService.getInstance().createMessage(userId, chatroomId, content);
    const newMessage = await MessageService.getInstance().getMessage(messageId);
    io.to(String(chatroomId)).emit(eventName.CREATE_MESSAGE, { ...newMessage, chatroomId });
  },
  async updateMessage(io, socket, message) {
    const { messageId, content } = message;
    const messageInfo = await MessageService.getInstance().getMessage(messageId);
    const { chatroomId } = messageInfo.chatroom;
    const updateMessage = await MessageService.getInstance().updateMessage(messageId, content);
    io.to(String(chatroomId)).emit(eventName.UPDATE_MESSAGE, updateMessage);
  },
  async deleteMessage(io, socket, message) {
    const { messageId } = message;
    const messageInfo = await MessageService.getInstance().getMessage(messageId);
    const { chatroomId } = messageInfo.chatroom;
    await MessageService.getInstance().deleteMessage(messageId);
    io.to(String(chatroomId)).emit(eventName.DELETE_MESSAGE, { messageId });
  }
};

export default messageHandler;
