// Category type = "sport"

export enum Category {
  Volleyball = 'Volleyball',
  Soccer = 'Soccer',
  Kickball = 'Kickball',
  Basketball = 'Basketball',
  Football = 'Football',
  Softball = 'Softball',
  Pickeball = 'Pickeball',
}

export const categories = Object.values(Category).sort((a, b) => a.localeCompare(b));

// export enum OtherCategory {
//   OtherEvents = 'Other',
// }

// export const categories = [
//   ...Object.values(Category).sort((a, b) => a.localeCompare(b)),
//   ...Object.values(OtherCategory),
// ];

// Default sport to have the menu open by default
export const DEFAULT_CATEGORY = Category.Volleyball;
