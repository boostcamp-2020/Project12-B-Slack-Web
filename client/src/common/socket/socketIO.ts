import { io } from 'socket.io-client';

const socketURL: any = process.env.API_URL;

const socket = io(socketURL, {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: window.localStorage.getItem('token')
      }
    }
  }
});

export default socket;
