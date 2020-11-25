import express from 'express';
import { createConnection } from 'typeorm';

const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();
interface user {
  username: string;
}
declare module 'express' {
  interface Request {
    user?: user;
  }
}
router.get('/github/login', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/' }), (req: express.Request, res: express.Response) => {
  console.log(req.user.username);
  const token = jwt.sign(
    {
      userId: req.user.username
    },
    'SECRET',
    { expiresIn: 60 }
  );
  res.cookie('jwt', token);
  res.redirect('/');
});

export default router;
