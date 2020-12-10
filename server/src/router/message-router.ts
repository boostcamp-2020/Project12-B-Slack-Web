import express from 'express';
import messageController from '@controller/message-controller';

const router = express.Router();

router.get('/:chatRoomId', messageController.getMessages);
router.post('/', messageController.createMessage);
router.patch('/:messageId', messageController.updateMessage);
router.delete('/:messageId', messageController.deleteMessage);

export default router;
