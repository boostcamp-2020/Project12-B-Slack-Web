import HttpStatusCode from '@constants/http-status-code';
import UserService from '@service/user-service';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface user {
  userId: number;
  username: string;
}

declare module 'express' {
  interface Request {
    user?: user;
  }
}

const OauthController = {
  async OauthCallback(req: Request, res: Response) {
    try {
      await UserService.getInstance().getUserById(String(req.user.username));
    } catch {
      await UserService.getInstance().createUser(String(req.user.username));
    }
    const token = jwt.sign(
      {
        userId: req.user.username
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ jwt: token });
    // res.redirect('/');
  }
};

export default OauthController;
