import express from 'express';
import ReplyController from '@controller/reply-controller';

const router = express.Router();

router.post('/', ReplyController.createReply);
router.get('/', ReplyController.getReplies);
router.get('/:offsetId', ReplyController.getReplies);

export default router;
