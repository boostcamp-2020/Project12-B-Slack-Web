import express from 'express';
import UserChatroomController from '@controller/user-chatroom-controller';

const router = express.Router();

router.post('/', UserChatroomController.joinChatroom);
router.post('/others', UserChatroomController.inviteChatroom);
router.get('/', UserChatroomController.getUserChatrooms);

export default router;
