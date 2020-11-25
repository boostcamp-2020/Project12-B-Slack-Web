import express from 'express';
import UserController from '@controller/user-controller';

const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:userId', UserController.getUser);

export default router;
