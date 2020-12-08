import UserChatroomService from '@service/user-chatroom-service';

const chatroomHander = {
  async joinChatroom(io, socket) {
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
  }
};

export default chatroomHander;
