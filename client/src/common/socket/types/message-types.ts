export const CREATE_MESSAGE = 'create message';

export interface createMessageState {
  content: string;
  chatroomId: number | null;
}
