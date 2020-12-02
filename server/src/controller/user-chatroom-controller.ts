import HttpStatusCode from '@constants/http-status-code';
import { NextFunction, Request, Response } from 'express';
import UserChatroomService from '@service/user-chatroom-service';

const UserChatroomController = {
  async joinChatroom(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.user;
    const { chatroomId } = req.body;
    try {
      await UserChatroomService.getInstance().joinChatroom(Number(userId), Number(chatroomId));
      res.status(HttpStatusCode.CREATED).send();
    } catch (err) {
      next(err);
    }
  },
  async getUserChatrooms(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.user;
    try {
      const users = await UserChatroomService.getInstance().getUserChatrooms(userId);
      res.status(HttpStatusCode.OK).json(users);
    } catch (err) {
      next(err);
    }
  }
};

export default UserChatroomController;
