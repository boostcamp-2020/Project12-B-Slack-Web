export const ChatroomType = {
  DM: 'DM',
  Channel: 'Channel'
};

export type ChatroomTypes = typeof ChatroomType[keyof typeof ChatroomType];
