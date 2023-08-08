import { IMenu, IMenuItem } from '.';

import { eventTypes } from './eventTypes';
import { tabManager } from '../tabs';

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
  menuItems: myEventsMenuItems
};
