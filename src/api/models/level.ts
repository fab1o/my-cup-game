export interface ILevel {
  title: string;
  key: string;
  stars: number;
  symbol: string;
}

export const levels: Array<ILevel> = [
  {
    title: 'Any Level (Rec)',
    key: 'any',
    stars: 1,
    symbol: 'Rec',
  },
  {
    title: 'Intermediate (B)',
    key: 'intermediate',
    stars: 2,
    symbol: 'B',
  },
  {
    title: 'High Intermediate (BB)',
    key: 'highIntermediate',
    stars: 2.5,
    symbol: 'BB',
  },
  {
    title: 'Advanced (A)',
    key: 'advanced',
    stars: 3,
    symbol: 'A',
  },
  {
    title: 'Competition (AA)',
    key: 'open',
    stars: 4,
    symbol: 'AA',
  },
];
