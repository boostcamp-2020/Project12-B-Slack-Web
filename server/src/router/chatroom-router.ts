import express from 'express';
import passport from 'passport';
import ChatroomController from '@controller/chatroom-controller';

const router = express.Router();

router.post('/', passport.authenticate('jwt'), ChatroomController.createChatroom);

export default router;
