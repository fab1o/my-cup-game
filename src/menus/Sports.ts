const UnSortedSports = [
  'Volleyball',
  'Soccer',
  'Kickball',
  'Basketball',
  'Football',
  'Softball',
  'Pickeball',
];

export const Sports = UnSortedSports.sort((a: string, b: string) => b.localeCompare(a));
