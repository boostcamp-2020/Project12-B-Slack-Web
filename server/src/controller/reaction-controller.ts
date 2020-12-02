import HttpStatusCode from '@constants/http-status-code';
import { NextFunction, Request, Response } from 'express';
import ReactionService from '@service/reaction-service';

const ReactionController = {
  async createReaction(req: Request, res: Response, next: NextFunction) {
    const { title, imageUri } = req.body;
    try {
      const reactionId = await ReactionService.getInstance().createReaction(title, imageUri);
      res.status(HttpStatusCode.CREATED).json({ reactionId });
    } catch (err) {
      next(err);
    }
  }
};

export default ReactionController;
