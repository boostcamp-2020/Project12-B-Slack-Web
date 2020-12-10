import UserChatroomService from '@service/user-chatroom-service';
import eventName from '@constants/event-name';
import ChatroomService from '@service/chatroom-service';

const chatroomHandler = {
  async initJoinChatroom(io, socket) {
    const req = socket.request;
    const { userId } = req.user;
    const userChatrooms = await UserChatroomService.getInstance().getUserChatrooms(userId);
    const keys = Object.values(userChatrooms);

    keys.forEach((chatrooms) => {
      if (chatrooms)
        chatrooms.forEach((chatroom) => {
          socket.join(String(chatroom.chatroomId));
        });
    });
  },
  async joinChatroom(io, socket, chatroom) {
    const req = socket.request;
    const { userId } = req.user;
    const { chatroomId } = chatroom;
    const { users, userCount } = await ChatroomService.getInstance().getChatroomInfo(chatroomId, userId);
    socket.join(String(chatroomId));
    io.to(String(chatroomId)).emit(eventName.JOIN_CHATROOM, { chatroomId, users, userCount });
  }
};

export default chatroomHandler;
