import HttpStatusCode from '@constants/http-status-code';
import { NextFunction, Request, Response } from 'express';
import ReplyService from '@service/reply-service';

const ReplyController = {
  async createReply(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.user;
    const { messageId, content } = req.body;
    try {
      await ReplyService.getInstance().createReply(Number(userId), Number(messageId), content);
      res.status(HttpStatusCode.CREATED).send();
    } catch (err) {
      next(err);
    }
  },
  async getReply(req: Request, res: Response, next: NextFunction) {
    const { replyId } = req.params;
    try {
      const reply = await ReplyService.getInstance().getReply(Number(replyId));
      res.status(HttpStatusCode.OK).json(reply);
    } catch (err) {
      next(err);
    }
  }
};

export default ReplyController;
