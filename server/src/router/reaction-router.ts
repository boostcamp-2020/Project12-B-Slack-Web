import express from 'express';
import ReactionController from '@controller/reaction-controller';

const router = express.Router();

router.post('/', ReactionController.createReaction);

export default router;
