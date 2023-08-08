import MyEvents from '../pages/MyEvents/MyEvents';
import FindEvents from '../pages/FindEvents/FindEvents';
import Settings from '../pages/Settings/Settings';
import HostEvent from '../pages/HostEvent/HostEvent';
import Home from '../pages/Home/Home';

interface RouteConfig {
  name: string;
  href: string;
  exact: boolean;
  page: React.FC;
}

export const routes: Array<RouteConfig> = [
  {
    name: 'MyEvents',
    href: '/MyEvents',
    exact: false,
    page: MyEvents,
  },
  {
    name: 'FindEvents',
    href: '/FindEvents',
    exact: false,
    page: FindEvents,
  },
  {
    name: 'HostEvent',
    href: '/HostEvent',
    exact: false,
    page: HostEvent,
  },
  {
    name: 'Settings',
    href: '/Settings',
    exact: false,
    page: Settings,
  },
];
