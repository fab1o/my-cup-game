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
  accessibility,
  search,
  addCircle,
  settings,
  peopleCircle,
  trophy,
  medal,
  fitness,
  balloon,
} from 'ionicons/icons';

import MyEvents from './pages/MyEvents/MyEvents';
import FindEvents from './pages/FindEvents/FindEvents';
import Settings from './pages/Settings/Settings';
import HostEvent from './pages/HostEvent/HostEvent';

export interface Route {
  title: string;
  ios?: string;
  md?: string;
  activeIcon?: string;
  href: string;
  itemStyle?: {
    [key: string]: any;
  };
  labelStyle?: {
    [key: string]: any;
  };
}

interface ITabRoutes {
  [name: string]: TabRoute;
}

interface TabRoute extends Route {
  page: React.FC;
  menu?: string;
}

export const TabRoutes: ITabRoutes = {
  FindEvents: {
    title: 'Find Events',
    ios: searchOutline,
    md: searchSharp,
    activeIcon: search,
    href: '/FindEvents',
    page: FindEvents,
    menu: 'FindEventsMenu',
  },
  MyEvents: {
    title: 'My Events',
    ios: accessibilityOutline,
    md: accessibilitySharp,
    activeIcon: accessibility,
    href: '/MyEvents',
    page: MyEvents,
    menu: 'MyEventsMenu',
  },
  HostEvent: {
    title: 'Host Event',
    ios: addCircleOutline,
    md: addCircleSharp,
    activeIcon: addCircle,
    href: '/HostEvent',
    page: HostEvent,
  },
  Settings: {
    title: 'Settings',
    ios: settingsOutline,
    md: settingsSharp,
    activeIcon: settings,
    href: '/Settings',
    page: Settings,
  },
};

export interface IMenuRoutes {
  [name: string]: Route;
}

export const MyEventsMenuRoutes: IMenuRoutes = {
  Pickups: {
    ios: peopleCircleOutline,
    md: peopleCircleSharp,
    activeIcon: peopleCircle,
    title: 'My Pick-up Games',
    href: '/MyEvents/Pickups',
  },
  Leagues: {
    ios: trophyOutline,
    md: trophySharp,
    activeIcon: trophy,
    title: 'My Leagues',
    href: '/MyEvents/Leagues',
  },
  Tournaments: {
    ios: medalOutline,
    md: medalSharp,
    activeIcon: medal,
    title: 'My Tournaments',
    href: '/MyEvents/Tournaments',
  },
  Clinics: {
    ios: fitnessOutline,
    md: fitnessSharp,
    activeIcon: fitness,
    title: 'My Clinics',
    href: '/MyEvents/Clinics',
  },
  Parties: {
    ios: balloonOutline,
    md: balloonSharp,
    activeIcon: balloon,
    title: 'My Parties',
    href: '/MyEvents/Parties',
  },
};

export const FindEventsMenuRoutes: IMenuRoutes = {
  Pickups: {
    ios: peopleCircleOutline,
    md: peopleCircleSharp,
    activeIcon: peopleCircle,
    title: 'Pick-up Games',
    href: '/FindEvents/<sport>/Pickups',
  },
  Leagues: {
    ios: trophyOutline,
    md: trophySharp,
    activeIcon: trophy,
    title: 'Leagues',
    href: '/FindEvents/<sport>/Leagues',
  },
  Tournaments: {
    ios: medalOutline,
    md: medalSharp,
    activeIcon: medal,
    title: 'Tournaments',
    href: '/FindEvents/<sport>/Tournaments',
  },
  Clinics: {
    ios: fitnessOutline,
    md: fitnessSharp,
    activeIcon: fitness,
    title: 'Clinics',
    href: '/FindEvents/<sport>/Clinics',
  },
};

export const FindEventsEspecialMenuRoutes: IMenuRoutes = {
  Parties: {
    ios: balloonOutline,
    md: balloonSharp,
    activeIcon: balloon,
    title: 'Parties',
    href: '/FindEvents/Parties',
    labelStyle: { fontWeight: 'bold' },
    itemStyle: {
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: 'var(--color)',
    },
  },
};

export const MyEventsEspecialMenuRoutes: IMenuRoutes = {
  Events: {
    title: 'All My Events',
    href: '/MyEvents/Events',
    labelStyle: { fontWeight: 'bold' },
    itemStyle: {
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: 'var(--color)',
    },
  },
};
