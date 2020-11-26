import HttpStatusCode from '@constants/http-status-code';
import User from '@model/user';
import UserService from '@service/user-service';
import { NextFunction, Request, Response } from 'express';

const passport = require('passport');
const jwt = require('jsonwebtoken');

interface user {
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
      { expiresIn: 60 }
    );
    res.cookie('jwt', token);
    res.send('login success');
    // res.redirect('/');
  }
};

export default OauthController;
