import {
  accessibilityOutline,
  accessibilitySharp,
  searchOutline,
  searchSharp,
  addCircleOutline,
  addCircleSharp,
  settingsOutline,
  settingsSharp,
  accessibility,
  search,
  addCircle,
  settings,
} from 'ionicons/icons';

interface TabConfig {
  title: string;
  href: string;

  ios?: string;
  md?: string;
  activeIcon?: string;
  menu?: string;
}

interface TabsConfig {
  [name: string]: TabConfig;
}

export const tabs: TabsConfig = {
  MyEvents: {
    title: 'My Events',
    ios: accessibilityOutline,
    md: accessibilitySharp,
    activeIcon: accessibility,
    href: '/MyEvents',

    menu: 'MyEventsMenu',
  },
  FindEvents: {
    title: 'Find Events',
    ios: searchOutline,
    md: searchSharp,
    activeIcon: search,
    href: '/FindEvents',

    menu: 'FindEventsMenu',
  },
  HostEvent: {
    title: 'Host Event',
    ios: addCircleOutline,
    md: addCircleSharp,
    activeIcon: addCircle,
    href: '/HostEvent',
  },
  Settings: {
    title: 'Settings',
    ios: settingsOutline,
    md: settingsSharp,
    activeIcon: settings,
    href: '/Settings',
  },
};

export const defaultTabName = 'FindEvents';
