import HttpStatusCode from '@constants/http-status-code';
import ChatroomService from '@service/chatroom-service';
import { NextFunction, Request, Response } from 'express';

const ChatroomController = {
  async createChatroom(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;
      const { title, description, isPrivate, chatType } = req.body;
      await ChatroomService.getInstance().createChatroom({ userId, title, description, isPrivate, chatType });
      res.status(HttpStatusCode.CREATED).send();
    } catch (err) {
      next(err);
    }
  },
  async getChatroomInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { chatroomId } = req.params;
      const chatroomInfo = await ChatroomService.getInstance().getChatroomInfo(Number(chatroomId));
      res.status(HttpStatusCode.OK).json(chatroomInfo);
    } catch (err) {
      next(err);
    }
  }
};

export default ChatroomController;
