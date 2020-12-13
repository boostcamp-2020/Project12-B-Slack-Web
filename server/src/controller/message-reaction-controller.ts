import HttpStatusCode from '@constants/http-status-code';
import { NextFunction, Request, Response } from 'express';
import MessageReactionService from '@service/message-reaction-service';

const MessageReactionController = {
  async createMessageReaction(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.user;
    const { messageId, title, emoji } = req.body;
    try {
      const messageReactionId = await MessageReactionService.getInstance().createMessageReaction(Number(userId), Number(messageId), title, emoji);
      res.status(HttpStatusCode.CREATED).json({ messageReactionId });
    } catch (err) {
      next(err);
    }
  },
  async deleteMessageReaction(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.user;
    const { messageId, reactionId } = req.params;
    try {
      await MessageReactionService.getInstance().deleteMessageReaction(Number(userId), Number(messageId), Number(reactionId));
      res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (err) {
      next(err);
    }
  }
};

export default MessageReactionController;
