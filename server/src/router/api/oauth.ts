import express from 'express';
import { createConnection } from 'typeorm';
import OauthController from '@controller/oauth-controller';

const passport = require('passport');

const router = express.Router();

router.get('/github/login', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/' }), OauthController.OauthCallback);

export default router;
