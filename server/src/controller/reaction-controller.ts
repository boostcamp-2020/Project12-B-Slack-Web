import HttpStatusCode from '@constants/http-status-code';
import { NextFunction, Request, Response } from 'express';
import ReactionService from '@service/reaction-service';

const ReactionController = {
  async createReaction(req: Request, res: Response, next: NextFunction) {
    const { title, emoji } = req.body;
    try {
      const reactionId = await ReactionService.getInstance().createReaction(title, emoji);
      res.status(HttpStatusCode.CREATED).json({ reactionId });
    } catch (err) {
      next(err);
    }
  },
  async getReactions(req: Request, res: Response, next: NextFunction) {
    try {
      const reactions = await ReactionService.getInstance().getReactions();
      res.status(HttpStatusCode.OK).json(reactions);
    } catch (err) {
      next(err);
    }
  }
};

export default ReactionController;
