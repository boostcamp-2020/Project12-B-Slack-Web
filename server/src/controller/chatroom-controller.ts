import HttpStatusCode from '@constants/http-status-code';
import ChatroomService from '@service/chatroom-service';
import { NextFunction, Request, Response } from 'express';

const ChatroomController = {
  async createChatroom(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, isPrivate, chatType } = req.body;
      await ChatroomService.getInstance().createChatroom({ title, description, isPrivate, chatType });
      res.status(HttpStatusCode.CREATED).send();
    } catch (err) {
      next(err);
    }
  }
};

export default ChatroomController;
