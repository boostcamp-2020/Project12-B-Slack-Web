import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import passport from 'passport';
import { createConnection } from 'typeorm';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';
import router from '@router/index';
import { errorHandler } from '@middleware/error-handler';

const logger = require('morgan');
const passportConfig = require('@config/passport');

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
    this.app.use(cors());
    this.app.use('/', router);
    this.app.use(errorHandler);
  }

  listen() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  }
}

const application = new Application();
application.init();
