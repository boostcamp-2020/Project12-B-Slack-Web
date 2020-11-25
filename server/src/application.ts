import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';
import router from '@router/index';

export default class Application {
  app: Express;

  constructor() {
    this.app = express();
  }

  async init() {
    this.initEnv();
    await this.initDatabase();
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

  registerMiddleware() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use('/', router);
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
