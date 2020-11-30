import HttpStatusCode from '@constants/http-status-code';
import { NextFunction, Request, Response } from 'express';
import ReplyService from '@service/reply-service';

const ReplyController = {
  async createMessage(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.user;
    const { messageId, content } = req.body;
    try {
      await ReplyService.getInstance().createReply(Number(userId), Number(messageId), content);
      res.status(HttpStatusCode.CREATED).send();
    } catch (err) {
      next(err);
    }
  }
};

export default ReplyController;
