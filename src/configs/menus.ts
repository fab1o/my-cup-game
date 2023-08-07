import { eventTypes } from './eventTypes';

import { sports } from './sports';

export interface IMenuItem {
  name: string;
  ios?: string;
  md?: string;
  activeIcon?: string;
  itemStyle?: {
    [key: string]: any;
  };
  labelStyle?: {
    [key: string]: any;
  };
  title: string;
  href: string;
  sport?: string;
}

export interface IFindEventsMenu {
  sport: string;
  menuItems: Array<IMenuItem>;
}

export const myEventsMenuItems = eventTypes.map<IMenuItem>((eventType) => ({
  name: eventType.name,
  ios: eventType.ios,
  md: eventType.md,
  activeIcon: eventType.activeIcon,
  title: `My ${eventType.title}`,
  href: `/MyEvents/${eventType.name}`,
}));

export const findEventsMenuItems = sports.map<IFindEventsMenu>((sport) => ({
  sport,
  menuItems: eventTypes.map<IMenuItem>((eventType) => ({
    name: eventType.name,
    ios: eventType.ios,
    md: eventType.md,
    activeIcon: eventType.activeIcon,
    title: eventType.title,
    href: `/FindEvents/${sport}/${eventType.name}`,
    sport,
  })),
}));

// export const findEventsMenuConfiga = new Map<string, MenuItemConfig>();
// findEventsMenuConfig.set('Pickups', {
//   ios: peopleCircleOutline,
//   md: peopleCircleSharp,
//   activeIcon: peopleCircle,
//   title: 'Pick-up Games',
//   href: '/FindEvents/<sport>/Pickups',
// });
// findEventsMenuConfig.set('Leagues', {
//   ios: trophyOutline,
//   md: trophySharp,
//   activeIcon: trophy,
//   title: 'Leagues',
//   href: '/FindEvents/<sport>/Leagues',
// });
// findEventsMenuConfig.set('Tournaments', {
//   ios: medalOutline,
//   md: medalSharp,
//   activeIcon: medal,
//   title: 'Tournaments',
//   href: '/FindEvents/<sport>/Tournaments',
// });
// findEventsMenuConfig.set('Clinics', {
//   ios: fitnessOutline,
//   md: fitnessSharp,
//   activeIcon: fitness,
//   title: 'Clinics',
//   href: '/FindEvents/<sport>/Clinics',
// });

// export const findEventsEspecialMenuConfig: MenuConfig = {
//   Parties: {
//     ios: balloonOutline,
//     md: balloonSharp,
//     activeIcon: balloon,
//     title: 'Parties',
//     href: '/FindEvents/Parties',
//     labelStyle: { fontWeight: 'bold' },
//     itemStyle: {
//       borderTopWidth: 1,
//       borderTopStyle: 'solid',
//       borderTopColor: 'var(--color)',
//     },
//   },
// };

// export const myEventsEspecialMenuConfig: MenuConfig = {
//   Events: {
//     title: 'All My Events',
//     href: '/MyEvents/Events',
//     labelStyle: { fontWeight: 'bold' },
//     itemStyle: {
//       borderTopWidth: 1,
//       borderTopStyle: 'solid',
//       borderTopColor: 'var(--color)',
//     },
//   },
// };
