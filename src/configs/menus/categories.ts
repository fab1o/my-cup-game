const unSortedCategories = [
  'Volleyball',
  'Soccer',
  'Kickball',
  'Basketball',
  'Football',
  'Softball',
  'Pickeball',
];

// Default sport to have the menu open by default
export const DEFAULT_CATEGORY = 'Volleyball';

export const categories = unSortedCategories.sort((a: string, b: string) => a.localeCompare(b));
