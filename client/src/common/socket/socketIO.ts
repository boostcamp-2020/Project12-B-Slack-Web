import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: window.localStorage.getItem('token')
      }
    }
  }
});

export default socket;
