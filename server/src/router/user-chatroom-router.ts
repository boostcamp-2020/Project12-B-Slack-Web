import express from 'express';
import UserChatroomController from '../controller/user-chatroom-controller';

const router = express.Router();

router.get('/', UserChatroomController.getUserChatrooms);

export default router;
