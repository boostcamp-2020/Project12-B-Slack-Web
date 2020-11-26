import express from 'express';
import UserRouter from '@router/user-router';
import ChatroomRouter from '@router/chatroom-router';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('router test');
});

router.use('/users', UserRouter);
router.use('/chatrooms', ChatroomRouter);

export default router;
