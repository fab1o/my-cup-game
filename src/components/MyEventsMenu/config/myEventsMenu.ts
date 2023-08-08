import { IMenu, IMenuItem } from '../../config';

import { eventTypes } from '../../config/eventTypes';
import { tabManager } from '../../Tabs/config/tabManager';

const myEventsMenuItems = eventTypes.map<IMenuItem>((eventType) => ({
  name: eventType.name,
  ios: eventType.ios,
  md: eventType.md,
  activeIcon: eventType.activeIcon,
  title: `My ${eventType.title}`,
  href: `/MyEvents/${eventType.name}`,
}));

export const myEventsMenu: IMenu<IMenuItem> = {
  menuId: tabManager.myEvents.menuId as string,
  title: 'My Events',
  baseHref: '/MyEvents',
  menuItems: myEventsMenuItems,
};
