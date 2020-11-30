import HttpStatusCode from '@constants/http-status-code';
import User from '@model/user';
import passport from 'passport';
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
      const userInfo = await UserService.getInstance().getUserById(String(req.user.username));
    } catch {
      const newUser = await UserService.getInstance().createUser(String(req.user.username));
    }
    const token = jwt.sign(
      {
        userId: req.user.username
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.cookie('jwt', token);
    res.send('login success');
    // res.redirect('/');
  }
};

export default OauthController;
