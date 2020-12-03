import express from 'express';
import AuthController from '@controller/auth-controller';

const router = express.Router();

router.get('/', AuthController.getUserInfo);

export default router;
