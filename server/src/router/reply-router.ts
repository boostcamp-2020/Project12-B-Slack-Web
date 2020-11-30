import express from 'express';
import ReplyController from '@controller/reply-controller';

const router = express.Router();

router.post('/', ReplyController.createMessage);

export default router;
