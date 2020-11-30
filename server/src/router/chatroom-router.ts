import express from 'express';
import ChatroomController from '@controller/chatroom-controller';

const router = express.Router();

router.post('/', ChatroomController.createChatroom);
router.get('/:chatroomId', ChatroomController.getChatroomInfo);
router.patch('/:chatroomId', ChatroomController.updateChatroom);
router.delete('/:chatroomId', ChatroomController.deleteChatroom);

export default router;
