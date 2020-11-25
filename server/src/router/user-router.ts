import express from 'express';
import UserController from '@controller/user-controller';

const router = express.Router();

router.get('/', UserController.getUsers);

export default router;
