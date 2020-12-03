import express from 'express';
import MessageReactionController from '@controller/message-reaction-controller';

const router = express.Router();

router.post('/', MessageReactionController.createMessageReaction);
router.delete('/:messageId/:reactionId', MessageReactionController.deleteMessageReaction);

export default router;
