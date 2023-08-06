import {
  medalOutline,
  medalSharp,
  trophyOutline,
  trophySharp,
  peopleCircleOutline,
  peopleCircleSharp,
  fitnessOutline,
  fitnessSharp,
  accessibilityOutline,
  accessibilitySharp,
  searchOutline,
  searchSharp,
  addCircleOutline,
  addCircleSharp,
  settingsOutline,
  settingsSharp,
  balloonOutline,
  balloonSharp,
} from 'ionicons/icons';

import MyEvents from './pages/MyEvents/MyEvents';
import FindEvents from './pages/FindEvents/FindEvents';
import Settings from './pages/Settings/Settings';
import HostEvent from './pages/HostEvent/HostEvent';

export interface Route {
  name: string;
  title: string;
  ios?: string;
  md?: string;
  href: string;
  itemStyle?: {
    [key: string]: any;
  };
  labelStyle?: {
    [key: string]: any;
  };
}

interface TabRoute extends Route {
  page: React.FC;
  menu?: string;
}

const TabRoutes: Array<TabRoute> = [
  {
    name: 'MyEvents',
    title: 'My Events',
    ios: accessibilityOutline,
    md: accessibilitySharp,
    href: '/MyEvents',
    page: MyEvents,
    menu: 'MyEventsMenu',
  },
  {
    name: 'FindEvents',
    title: 'Find Events',
    ios: searchOutline,
    md: searchSharp,
    href: '/FindEvents',
    page: FindEvents,
    menu: 'FindEventsMenu',
  },
  {
    name: 'HostEvent',
    title: 'Host Event',
    ios: addCircleOutline,
    md: addCircleSharp,
    href: '/HostEvent',
    page: HostEvent,
  },
  {
    name: 'Settings',
    title: 'Settings',
    ios: settingsOutline,
    md: settingsSharp,
    href: '/Settings',
    page: Settings,
  },
];

const MyEventsMenuRoutes: Array<Route> = [
  {
    name: 'Pickups',
    ios: peopleCircleOutline,
    md: peopleCircleSharp,
    title: 'All My Pick-Ups',
    href: '/MyEvents/Pickups',
  },
  {
    name: 'Leagues',
    ios: trophyOutline,
    md: trophySharp,
    title: 'All My Leagues',
    href: '/MyEvents/Leagues',
  },
  {
    name: 'Tournaments',
    ios: medalOutline,
    md: medalSharp,
    title: 'All My Tournaments',
    href: '/MyEvents/Tournaments',
  },
  {
    name: 'Clinics',
    ios: fitnessOutline,
    md: fitnessSharp,
    title: 'All My Clinics',
    href: '/MyEvents/Clinics',
  },
  {
    name: 'Parties',
    ios: balloonOutline,
    md: balloonSharp,
    title: 'All My Parties',
    href: '/MyEvents/Parties',
  },
];

const FindEventsMenuRoutes: Array<Route> = [
  {
    name: 'Pickups',
    ios: peopleCircleOutline,
    md: peopleCircleSharp,
    title: 'All My Pick-Ups',
    href: '/FindEvents/<sport>/Pickups',
  },
  {
    name: 'Leagues',
    ios: trophyOutline,
    md: trophySharp,
    title: 'Leagues',
    href: '/FindEvents/<sport>/Leagues',
  },
  {
    name: 'Tournaments',
    ios: medalOutline,
    md: medalSharp,
    title: 'Tournaments',
    href: '/FindEvents/<sport>/Tournaments',
  },
  {
    name: 'Clinics',
    ios: fitnessOutline,
    md: fitnessSharp,
    title: 'Clinics',
    href: '/FindEvents/<sport>/Clinics',
  },
];

const FindEventsEspecialMenuRoutes: Array<Route> = [
  {
    name: 'Parties',
    ios: balloonOutline,
    md: balloonSharp,
    title: 'All Parties',
    href: '/FindEvents/Parties',
    labelStyle: { fontWeight: 'bold' },
    itemStyle: {
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: 'var(--color)',
    },
  },
];

const MyEventsEspecialMenuRoutes: Array<Route> = [
  {
    name: 'Events',
    title: 'All My Events',
    href: '/MyEvents/Events',
    labelStyle: { fontWeight: 'bold' },
    itemStyle: {
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: 'var(--color)',
    },
  },
];

export {
  TabRoutes,
  MyEventsMenuRoutes,
  FindEventsMenuRoutes,
  MyEventsEspecialMenuRoutes,
  FindEventsEspecialMenuRoutes,
};
