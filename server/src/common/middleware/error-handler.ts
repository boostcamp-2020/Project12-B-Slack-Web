import HttpStatusCode from '@constants/http-status-code';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send();
};

export { errorHandler };
