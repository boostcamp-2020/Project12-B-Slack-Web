import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('router test');
});

export default router;
