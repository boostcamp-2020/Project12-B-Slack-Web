import HttpStatusCode from '@constants/http-status-code';
import { NextFunction, Request, Response } from 'express';

const AuthController = {
  async getUserInfo(req: Request, res: Response, next: NextFunction) {
    const { userId, profileUri, displayName } = req.user;
    try {
      res.status(HttpStatusCode.OK).json({ userId, profileUri, displayName });
    } catch (err) {
      next(err);
    }
  }
};

export default AuthController;
