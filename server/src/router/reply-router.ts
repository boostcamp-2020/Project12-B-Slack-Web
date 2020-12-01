import express from 'express';
import ReplyController from '@controller/reply-controller';

const router = express.Router();

router.post('/', ReplyController.createReply);
router.get('/:replyId', ReplyController.getReply);

export default router;
