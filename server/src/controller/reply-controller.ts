import HttpStatusCode from '@constants/http-status-code';
import { NextFunction, Request, Response } from 'express';
import ReplyService from '@service/reply-service';
import messageService from '@service/message-service';

const ReplyController = {
  async createReply(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.user;
    const { messageId, content } = req.body;
    try {
      const replyId = await ReplyService.getInstance().createReply(Number(userId), Number(messageId), content);
      res.status(HttpStatusCode.CREATED).json({ replyId });
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
  },
  async getReplies(req: Request, res: Response, next: NextFunction) {
    const { offsetId } = req.query;
    const { messageId } = req.params;
    try {
      const message = await messageService.getInstance().getMessage(Number(messageId));
      const replies = await ReplyService.getInstance().getReplies(Number(messageId), Number(offsetId));
      const replyCount = await ReplyService.getInstance().getReplyCount(Number(messageId));
      res.header('Access-Control-Expose-Headers', 'x-total-count');
      res.setHeader('x-total-count', replyCount);
      res.status(HttpStatusCode.OK).json({ message, replies });
    } catch (err) {
      next(err);
    }
  }
};

export default ReplyController;
