const unSortedSports = [
  'Volleyball',
  'Soccer',
  'Kickball',
  'Basketball',
  'Football',
  'Softball',
  'Pickeball',
];

// Default sport to have the menu open by default
export const DEFAULT_SPORT = 'Volleyball';

export const sports = unSortedSports.sort((a: string, b: string) => a.localeCompare(b));
