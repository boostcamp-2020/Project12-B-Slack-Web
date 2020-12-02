import UserService from '@service/user-service';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import randomstring from 'randomstring';

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
  async OauthCallback(req: any, res: Response) {
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
    const randomValue = randomstring.generate(7);
    req.Redis.createCode(randomValue, token);

    res.redirect(`${process.env.CLIENT_ADDRESS}?code=${randomValue}`);
  },

  async getToken(req: any, res: Response, next: NextFunction) {
    try {
      const { code } = req.params;
      req.Redis.client.get(code, (err, Token) => {
        res.setHeader('Access-Control-Expose-Headers', 'Authorization');
        res.setHeader('Authorization', `Bearer ${Token}`);
        res.end();
      });
    } catch (err) {
      next(err);
    }
  }
};

export default OauthController;
