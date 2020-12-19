export const Size = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  SUPER_SMALL: 'superSmall'
};

export type Sizes = typeof Size[keyof typeof Size];
