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

interface TabIcons {
  ios?: string;
  md?: string;
  activeIcon?: string;
}

interface Tab {
  name: string;
  title: string;
  href: string;
  icons: TabIcons;
  menuId?: string;
}

const tabs: Array<Tab> = [
  {
    name: 'MyEvents',
    title: 'My Events',
    href: '/MyEvents',

    icons: {
      ios: accessibilityOutline,
      md: accessibilitySharp,
      activeIcon: accessibility,
    },

    menuId: 'MyEventsMenu',
  },
  {
    name: 'FindEvents',
    title: 'Find Events',
    href: '/FindEvents',

    icons: {
      ios: searchOutline,
      md: searchSharp,
      activeIcon: search,
    },

    menuId: 'FindEventsMenu',
  },
  {
    name: 'HostEvent',
    title: 'Host Event',
    href: '/HostEvent',

    icons: {
      ios: addCircleOutline,
      md: addCircleSharp,
      activeIcon: addCircle,
    },
  },
  {
    name: 'Settings',
    title: 'Settings',
    href: '/Settings',

    icons: {
      ios: settingsOutline,
      md: settingsSharp,
      activeIcon: settings,
    },
  },
];

interface ITabManager {
  tabs: Array<Tab>;

  myEvents: Tab;
  findEvents: Tab;
  hostEvent: Tab;
  settings: Tab;

  getTab(name?: string): Tab | undefined;
  getIcons(tab: Tab, pathname: string): TabIcons;
}

export const tabManager: ITabManager = {
  tabs,

  myEvents: tabs[0],
  findEvents: tabs[1],
  hostEvent: tabs[2],
  settings: tabs[3],

  getTab(name?: string) {
    return tabs.find((tab) => tab.name === name);
  },

  getIcons(tab, pathname) {
    if (tab === tabManager.myEvents && pathname.endsWith('/')) {
      return {
        activeIcon: tab.icons.activeIcon,
      };
    }

    if (pathname.startsWith(tab.href)) {
      return {
        activeIcon: tab.icons.activeIcon,
      };
    }

    return {
      ios: tab.icons.ios,
      md: tab.icons.md,
    };
  },
};

export const DEFAULT_TAB = tabManager.myEvents;
