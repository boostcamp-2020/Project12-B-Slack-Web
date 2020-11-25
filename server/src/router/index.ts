import express from 'express';
import UserRouter from '@router/user-router';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('router test');
});

router.use('/users', UserRouter);

export default router;
