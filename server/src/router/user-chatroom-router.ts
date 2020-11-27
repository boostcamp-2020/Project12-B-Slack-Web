import express from 'express';
import passport from 'passport';
import UserChatroomController from '../controller/user-chatroom-controller';

const router = express.Router();

router.get('/', passport.authenticate('jwt'), UserChatroomController.getUserChatrooms);

export default router;
