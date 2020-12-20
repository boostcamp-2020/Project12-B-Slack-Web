export const ScrollEventType = {
  COMMON: 'Common',
  LOADING: 'Loading',
  COMPLETELOADING: 'Complete loading',
  INPUTTEXT: 'Input Text'
};

export const THROTTLETIME = 50;

export type ScrollEventTypes = typeof ScrollEventType[keyof typeof ScrollEventType];
