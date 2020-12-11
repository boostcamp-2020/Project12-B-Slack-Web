import HttpStatusCode from '@constants/http-status-code';
import ChatroomService from '@service/chatroom-service';
import { NextFunction, Request, Response } from 'express';

const ChatroomController = {
  async createChannel(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;
      const { title, description, isPrivate } = req.body;
      const chatroomId = await ChatroomService.getInstance().createChannel({ userId: Number(userId), title, description, isPrivate });
      res.status(HttpStatusCode.CREATED).json({ chatroomId });
    } catch (err) {
      next(err);
    }
  },
  async createDM(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;
      const { invitedUserId } = req.body;
      const chatroomId = await ChatroomService.getInstance().createDM(Number(userId), Number(invitedUserId));
      res.status(HttpStatusCode.CREATED).json({ chatroomId });
    } catch (err) {
      next(err);
    }
  },
  async getChatrooms(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;
      const { offsetTitle } = req.query;
      const chatrooms = await ChatroomService.getInstance().getChatrooms(Number(userId), String(offsetTitle));
      const chatroomCount = await ChatroomService.getInstance().getChatroomCount(userId);
      res.setHeader('X-total-count', chatroomCount);
      res.status(HttpStatusCode.OK).json(chatrooms);
    } catch (err) {
      next(err);
    }
  },
  async getChatroomInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;
      const { chatroomId } = req.params;
      const chatroomInfo = await ChatroomService.getInstance().getChatroomInfo(Number(chatroomId), Number(userId));
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
