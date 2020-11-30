import express from 'express';
import userRouter from '@router/user-router';
import messageRouter from '@router/message-router';
import chatroomRouter from '@router/chatroom-router';
import userChatroomRouter from '@router/user-chatroom-router';

const router = express.Router();
router.use('/messages', messageRouter);
router.use('/users', userRouter);
router.use('/chatrooms', chatroomRouter);
router.use('/user-chatrooms', userChatroomRouter);

export default router;
