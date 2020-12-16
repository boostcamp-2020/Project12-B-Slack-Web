import { io } from 'socket.io-client';

const socketURL: any = process.env.API_URL;

const socket = io(socketURL, {
  query: { token: window.localStorage.getItem('token') },
  transports: ['websocket', 'polling']
});

export default socket;
