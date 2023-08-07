import MyEvents from '../pages/MyEvents/MyEvents';
import FindEvents from '../pages/FindEvents/FindEvents';
import Settings from '../pages/Settings/Settings';
import HostEvent from '../pages/HostEvent/HostEvent';

interface RouteConfig {
  name: string;
  href: string;
  exact: boolean;
  component: React.FC;
}

export const routes: Array<RouteConfig> = [
  {
    name: 'MyEvents',
    href: '/MyEvents',
    exact: false,
    component: MyEvents,
  },
  {
    name: 'FindEvents',
    href: '/FindEvents',
    exact: false,
    component: FindEvents,
  },
  {
    name: 'HostEvent',
    href: '/HostEvent',
    exact: false,
    component: HostEvent,
  },
  {
    name: 'Settings',
    href: '/Settings',
    exact: false,
    component: Settings,
  },
];
