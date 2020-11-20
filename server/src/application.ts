import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import router from '@router/index';

const envFile = `${process.env.NODE_ENV || 'development'}.env`;
dotenv.config({ path: envFile });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
