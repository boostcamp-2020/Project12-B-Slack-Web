import HttpStatusCode from '@constants/http-status-code';
import Message from '@model/message';
import MessageService from '@service/message-service';
import { NextFunction, Request, Response } from 'express';

const messageController = {
  async getMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { messageId } = req.params;
      const messages = await MessageService.getInstance().getMessage(Number(messageId));
      res.status(HttpStatusCode.OK).json(messages);
    } catch (err) {
      next(err);
    }
  },
  async createMessage(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.user;
    const { chatRoomId, content, fileURi } = req.body;
    try {
      const message = await MessageService.getInstance().createMessage(Number(userId), Number(chatRoomId), String(content));
      res.status(HttpStatusCode.CREATED).send();
    } catch (err) {
      next(err);
    }
  },
  async updateMessage(req: Request, res: Response, next: NextFunction) {
    const { content, fileUri } = req.body;
    const { messageId } = req.params;
    try {
      const message = await MessageService.getInstance().updateMessage(Number(messageId), String(content));
      res.status(HttpStatusCode.CREATED).send(message);
    } catch (err) {
      next(err);
    }
  },
  async deleteMessage(req: Request, res: Response, next: NextFunction) {
    const { messageId } = req.params;
    try {
      await MessageService.getInstance().deleteMessage(Number(messageId));
      res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (err) {
      next(err);
    }
  }
};

export default messageController;
