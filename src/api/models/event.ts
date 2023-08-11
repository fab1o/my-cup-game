import { Category } from './categories';

import { ILevel } from './level';
import { RecurringType } from './recurringType';

export interface Event {
  name: string;
  category: Category;
  level: ILevel;
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
