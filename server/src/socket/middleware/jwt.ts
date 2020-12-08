import passport from 'passport';

const jwtMiddleware = (io) => {
  const wrap = (middleware) => (socket, next) => middleware(socket.request, {}, next);
  io.use(wrap(passport.authenticate('jwt', { session: false })));
};

export default jwtMiddleware;
