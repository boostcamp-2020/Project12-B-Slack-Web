import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import indexRouter from '@router/index';
import passport from 'passport';

let logger = require('morgan');

const passportConfig = require('@config/passport');

const envFile = `${process.env.NODE_ENV || 'development'}.env`;
dotenv.config({ path: envFile });

const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger('dev'));

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passportConfig();
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
