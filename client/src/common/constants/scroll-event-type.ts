export const ScrollEventType = {
  COMMON: 'Common',
  LOADING: 'Loading',
  COMPLETELOADING: 'Complete loading',
  INPUTTEXT: 'Input Text'
};

export type ScrollEventTypes = typeof ScrollEventType[keyof typeof ScrollEventType];
