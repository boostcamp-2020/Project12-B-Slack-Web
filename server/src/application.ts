import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import passport from 'passport';
import { createConnection } from 'typeorm';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';
import router from '@router/index';
import { errorHandler } from '@middleware/error-handler';
import logger from 'morgan';
import passportConfig from '@config/passport';
import cookieParser from 'cookie-parser';
import redis from '@middleware/redis';
import Socket from '@socket/socket';
import initSocketIo from '@socket/init-socket';

export default class Application {
  app: Express;

  constructor() {
    this.app = express();
  }

  async init() {
    this.initEnv();
    await this.initDatabase();
    this.initPassport();
    this.registerMiddleware();
    this.listen();
  }

  initEnv() {
    const envFile: string = `${process.env.NODE_ENV || 'development'}.env`;
    dotenv.config({ path: envFile });
  }

  async initDatabase() {
    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();
    await createConnection();
  }

  initPassport() {
    this.app.use(passport.initialize());
    passportConfig();
  }

  registerMiddleware() {
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(redis);
    this.app.use('/', router);
    this.app.use(errorHandler);
  }

  listen() {
    const PORT = process.env.PORT || 3000;
    const server = this.app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
    const io = Socket(server);
    initSocketIo(io);
  }
}

const application = new Application();
application.init();
