import HttpStatusCode from '@constants/http-status-code';
import { NextFunction, Request, Response } from 'express';
import UserChatroomService from '@service/user-chatroom-service';

const UserChatroomController = {
  async getUserChatrooms(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;
      const users = await UserChatroomService.getInstance().getUserChatrooms(userId);
      res.status(HttpStatusCode.OK).json(users);
    } catch (err) {
      next(err);
    }
  }
};

export default UserChatroomController;
