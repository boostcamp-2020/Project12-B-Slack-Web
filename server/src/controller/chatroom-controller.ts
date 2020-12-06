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
  async getChatrooms(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;
      const chatroom = await ChatroomService.getInstance().getChatrooms(Number(userId));
      res.status(HttpStatusCode.OK).json(chatroom);
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
  },
  async updateChatroom(req: Request, res: Response, next: NextFunction) {
    try {
      const { chatroomId } = req.params;
      const { title, topic, description } = req.body;
      await ChatroomService.getInstance().updateChatroom(Number(chatroomId), title, topic, description);
      res.status(HttpStatusCode.CREATED).send();
    } catch (err) {
      next(err);
    }
  },
  async deleteChatroom(req: Request, res: Response, next: NextFunction) {
    try {
      const { chatroomId } = req.params;
      await ChatroomService.getInstance().deleteChatroom(Number(chatroomId));
      res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (err) {
      next(err);
    }
  }
};

export default ChatroomController;
