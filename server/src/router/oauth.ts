import express from 'express';
import OauthController from '@controller/oauth-controller';
import passport from 'passport';

const router = express.Router();

router.get('/github/login', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/' }), OauthController.OauthCallback);

export default router;
