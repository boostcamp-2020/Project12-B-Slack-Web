import UserService from '@service/user-service';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import randomstring from 'randomstring';

interface user {
  userId: number;
  username: string;
  profileUri: string;
  displayName: string;
}

declare module 'express' {
  interface Request {
    user?: user;
  }
}

const OauthController = {
  async OauthCallback(req: any, res: Response) {
    const { username, photos } = req.user;
    const profileUri = photos && photos[0].value;
    try {
      await UserService.getInstance().getUserById(username);
    } catch {
      await UserService.getInstance().createUser(username, profileUri);
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
