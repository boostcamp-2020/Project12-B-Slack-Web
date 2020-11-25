import UserService from '@service/user-service';
import { NextFunction, Request, Response } from 'express';

const UserController = {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getInstance().getUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
};

export default UserController;
