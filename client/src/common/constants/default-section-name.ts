export const DefaultSectionName = {
  CHANNELS: 'Channels',
  DIRECT_MESSAGES: 'Direct Messages',
  STARRED: 'Starred'
};

export type DefaultSectionNames = typeof DefaultSectionName[keyof typeof DefaultSectionName];
