import passport from 'passport';

const GitHubStrategy = require('passport-github').Strategy;

module.exports = () => {
  passport.serializeUser((user, done) => {
    // console.log('serializeUser', user);
    done(null, user.id);
  });

  passport.deserializeUser((user, done) => {
    // console.log('deserializeUser');
    done(null, user);
  });

  passport.use(
    new GitHubStrategy(
      {
        clientID: '1da790e8e3ccf8359060',
        clientSecret: 'efc948fa6c7f8f29a31309c774f21c2749d5ea85',
        callbackURL: 'http://127.0.0.1:3000/oauth/github/callback'
      },
      (accessToken, refreshToken, profile, cb) => {
        // console.log(accessToken, refreshToken, profile);
        // User.findOrCreate({ githubId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
        return cb(null, profile);
      }
    )
  );
};
