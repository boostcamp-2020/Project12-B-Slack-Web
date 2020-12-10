import express from 'express';
import ChatroomController from '@controller/chatroom-controller';

const router = express.Router();

router.get('/', ChatroomController.getChatrooms);
router.post('/channel', ChatroomController.createChannel);
router.post('/dm', ChatroomController.createDM);
router.get('/:chatroomId', ChatroomController.getChatroomInfo);
router.patch('/:chatroomId', ChatroomController.updateChatroom);
router.delete('/:chatroomId', ChatroomController.deleteChatroom);

export default router;
