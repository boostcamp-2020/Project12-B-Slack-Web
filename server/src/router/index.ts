import express from 'express';
import oauthRouter from '@router/api/oauth';
import apiRouter from '@router/api';
import passport from 'passport';

const router = express.Router();
router.post('/', (req, res) => {
  console.log(req.body);
});
router.use('/api', passport.authenticate('jwt', { session: false }), apiRouter);
router.use('/oauth', oauthRouter);

export default router;
