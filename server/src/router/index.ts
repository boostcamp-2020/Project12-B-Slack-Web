import express from 'express';
import oauthRouter from '@router/api/oauth';

const router = express.Router();
router.get('/api', (req, res) => {
  res.send('router test');
});
router.use('/oauth', oauthRouter);
export default router;
