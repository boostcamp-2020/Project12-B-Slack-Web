import express from 'express';
import oauthRouter from '@router/api/oauth';
import UserRouter from '@router/user-router';
import ChatroomRouter from '@router/chatroom-router';
import userChatroomRouter from '@router/user-chatroom-router';

const router = express.Router();

router.get('/api', (req, res) => {
  res.send('router test');
});

router.use('/oauth', oauthRouter);
router.use('/users', UserRouter);
router.use('/chatrooms', ChatroomRouter);
router.use('/user-chatrooms', userChatroomRouter);

export default router;
