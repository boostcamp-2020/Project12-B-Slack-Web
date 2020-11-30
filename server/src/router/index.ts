import express from 'express';
import passport from 'passport';
import oauthRouter from '@router/oauth';
import apiRouter from '@router/api';

const router = express.Router();

router.use('/oauth', oauthRouter);
router.use('/api', passport.authenticate('jwt'), apiRouter);

export default router;
