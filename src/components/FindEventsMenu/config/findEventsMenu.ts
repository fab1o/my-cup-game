import { IMenu, ICategoryMenuItem } from '../../config';

import { eventTypes } from '../../config/eventTypes';
import { categories } from '../../config/categories';
import { tabManager } from '../../Tabs/config/tabManager';

const findEventsMenuItems = categories.map<ICategoryMenuItem>((category) => ({
  category,
  name: category,
  title: category,
  menuItems: eventTypes.map<ICategoryMenuItem>((eventType) => ({
    category,
    name: eventType.name,
    ios: eventType.ios,
    md: eventType.md,
    activeIcon: eventType.activeIcon,
    title: eventType.title,
    href: `/FindEvents/${category}/${eventType.name}`,
  })),
}));

export const findEventsMenu: IMenu<ICategoryMenuItem> = {
  menuId: tabManager.findEvents.menuId as string,
  title: 'Find Events',
  baseHref: '/FindEvents',
  menuItems: findEventsMenuItems,
};
