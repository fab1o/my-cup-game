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

interface Icons {
  ios?: string;
  md?: string;
  activeIcon?: string;
}

interface Nav {
  name: string;
  title: string;
  href: string;
  icons: Icons;
  menuId?: string;
}

const navs: Array<Nav> = [
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

interface IManager {
  navs: Array<Nav>;

  myEvents: Nav;
  findEvents: Nav;
  hostEvent: Nav;
  settings: Nav;

  getNav(name?: string): Nav | undefined;
  getIcons(nav: Nav, pathname: string): Icons;
}

export const navManager: IManager = {
  navs,

  myEvents: navs[0],
  findEvents: navs[1],
  hostEvent: navs[2],
  settings: navs[3],

  getNav(name?: string) {
    return navs.find((nav) => nav.name === name);
  },

  getIcons(nav, pathname) {
    if (nav === this.myEvents && pathname.endsWith('/')) {
      return {
        activeIcon: nav.icons.activeIcon,
      };
    }

    if (pathname.startsWith(nav.href)) {
      return {
        activeIcon: nav.icons.activeIcon,
      };
    }

    return {
      ios: nav.icons.ios,
      md: nav.icons.md,
    };
  },
};

export const DEFAULT_NAV = navManager.myEvents;
