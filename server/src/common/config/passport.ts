import passport from 'passport';
import UserService from '@service/user-service';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as GitHubStrategy } from 'passport-github';

function passportConfig() {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
      },
      async (accessToken, refreshToken, profile, cb) => {
        return cb(null, profile);
      }
    )
  );
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };

  passport.use(
    new JwtStrategy(opts, async function (jwtPayload, done) {
      try {
        const user = await UserService.getInstance().getUserById(String(jwtPayload.userId));
        return done(null, user);
      } catch (err) {
        return done(null, false);
      }
    })
  );
}

export default passportConfig;
