export const Size = {
  BIG: 'big',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  SUPER_SMALL: 'superSmall'
};

export type Sizes = typeof Size[keyof typeof Size];
