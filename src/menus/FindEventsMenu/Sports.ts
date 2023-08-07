const UnSortedSports = [
  'Volleyball',
  'Soccer',
  'Kickball',
  'Basketball',
  'Football',
  'Softball',
  'Pickeball',
];

export const defaultSport = 'Volleyball';

export const Sports = UnSortedSports.sort((a: string, b: string) => a.localeCompare(b));
