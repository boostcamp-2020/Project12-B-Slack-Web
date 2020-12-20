export const SortMethod = {
  NEWEST_CHANNEL: 'Newest channel',
  OLDEST_CHANNEL: 'Oldest channel',
  MOST_MEMBERS: 'Most members',
  A_TO_Z: 'A to Z',
  Z_TO_A: 'Z to A'
};
export type SortMethods = typeof SortMethod[keyof typeof SortMethod];
