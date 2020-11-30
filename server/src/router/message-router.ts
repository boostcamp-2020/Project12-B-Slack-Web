import express from 'express';
import messageController from '@controller/message-controller';

const router = express.Router();

router.get('/:messageId', messageController.getMessage);
router.post('/', messageController.createMessage);
router.patch('/:messageId', messageController.updateMessage);
router.delete('/:messgeId', messageController.deleteMessage);
export default router;
