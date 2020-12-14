export const CREATE_REPLY = 'create reply';

export interface createThreadState {
  content: string;
  messageId: number | null;
}
