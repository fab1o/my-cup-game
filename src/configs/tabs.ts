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

interface Tab {
  name: string;
  title: string;
  href: string;

  ios?: string;
  md?: string;
  activeIcon?: string;

  menuId?: string;
}

const tabs: Array<Tab> = [
  {
    name: 'MyEvents',
    title: 'My Events',
    href: '/MyEvents',

    ios: accessibilityOutline,
    md: accessibilitySharp,
    activeIcon: accessibility,

    menuId: 'MyEventsMenu',
  },
  {
    name: 'FindEvents',
    title: 'Find Events',
    href: '/FindEvents',

    ios: searchOutline,
    md: searchSharp,
    activeIcon: search,

    menuId: 'FindEventsMenu',
  },
  {
    name: 'HostEvent',
    title: 'Host Event',
    href: '/HostEvent',

    ios: addCircleOutline,
    md: addCircleSharp,
    activeIcon: addCircle,
  },
  {
    name: 'Settings',
    title: 'Settings',
    href: '/Settings',

    ios: settingsOutline,
    md: settingsSharp,
    activeIcon: settings,
  },
];

interface ITabManager {
  tabs: Array<Tab>;

  myEvents: Tab;
  findEvents: Tab;
  hostEvent: Tab;
  settings: Tab;

  getTab(name?: string): Tab | undefined;
}

export const tabManager: ITabManager = {
  tabs,

  myEvents: tabs[0],
  findEvents: tabs[1],
  hostEvent: tabs[2],
  settings: tabs[3],

  getTab: (name?: string) => {
    return tabs.find((tab) => tab.name === name)
  }
};

export const DEFAULT_TAB = tabManager.myEvents;
