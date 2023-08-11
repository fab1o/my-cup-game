import { IMenu, IMenuItem } from '../../config';

import { eventTypes } from '../../config/eventTypes';
import { navManager } from '../../navigation/navManager';

const myEventsMenuItems = eventTypes.map<IMenuItem>((eventType) => ({
  name: eventType.name,
  ios: eventType.ios,
  md: eventType.md,
  activeIcon: eventType.activeIcon,
  title: `My ${eventType.title}`,
  href: `/MyEvents/${eventType.name}`,
}));

export const myEventsMenu: IMenu<IMenuItem> = {
  menuId: navManager.myEvents.menuId as string,
  title: 'My Events',
  baseHref: '/MyEvents',
  menuItems: myEventsMenuItems,
};
