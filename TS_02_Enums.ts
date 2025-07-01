export const Flag = {
  Green: 'green',
  White: 'white',
  Orange: 'orange',
} as const;

export type FlagColor = typeof Flag[keyof typeof Flag];
