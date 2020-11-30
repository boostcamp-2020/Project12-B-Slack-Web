import express from 'express';
import userRouter from '@router/user-router';
import messageRouter from '@router/message-router';

const router = express.Router();
router.use('/messages', messageRouter);
router.use('/users', userRouter);

export default router;
