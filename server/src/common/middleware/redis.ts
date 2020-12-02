import { Response, NextFunction } from 'express';
import redis from 'redis';
import dotenv from 'dotenv';

const initEnv = () => {
  const envFile: string = `${process.env.NODE_ENV || 'development'}.env`;
  dotenv.config({ path: envFile });
};

class Redis {
  client: any;

  constructor() {
    initEnv();
    this.client = redis.createClient({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT)
    });
  }

  createCode = async (code, token) => {
    this.client.set(code, token);
  };

  deleteCode = (code) => {
    this.client.del(code);
  };
}

const middleware = (req: any, res: Response, next: NextFunction) => {
  req.Redis = new Redis();
  next();
};

export default middleware;
