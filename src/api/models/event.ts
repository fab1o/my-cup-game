import { Category, OtherCategory } from './categories';

import { Level } from './level';
import { RecurringType } from './recurringType';

export interface Event {
  name: string;
  category: Category | OtherCategory;
  level: Level;
  location: string;
  maxCapacity: number;
  price: number;
  description?: string;
  recurring?: RecurringType;
  link?: string;
  startDateTime: Date;
  endDateTime: Date;
  isPrivate: boolean;
  hasRSVP: boolean;
}
