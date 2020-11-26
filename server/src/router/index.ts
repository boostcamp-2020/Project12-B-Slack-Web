import express from 'express';
import oauthRouter from '@router/api/oauth';
import UserRouter from '@router/user-router';

const router = express.Router();
router.get('/api', (req, res) => {
  res.send('router test');
});
router.use('/oauth', oauthRouter);
router.use('/users', UserRouter);

export default router;
