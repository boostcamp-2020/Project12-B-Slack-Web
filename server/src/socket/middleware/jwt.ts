import passport from 'passport';

const jwtMiddleware = (io) => {
  const wrap = (middleware) => (socket, next) => {
    const { request } = socket;
    const { token } = socket.handshake.query;
    request.headers.authorization = token;
    middleware(request, {}, next);
  };
  io.use(wrap(passport.authenticate('jwt', { session: false })));
};

export default jwtMiddleware;
