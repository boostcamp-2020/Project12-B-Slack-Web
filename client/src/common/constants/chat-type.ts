export const ChatType = {
  Message: 'Message',
  ReplyTitle: 'ReplyTitle',
  Reply: 'Reply'
};

export type ChatTypes = typeof ChatType[keyof typeof ChatType];
