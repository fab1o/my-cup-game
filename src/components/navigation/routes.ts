import {
  MyEvents,
  FindEvents,
  Settings,
  HostEvent,
  SoccerLeagues,
  MyPickupGames,
} from '../../pages';

interface RouteConfig {
  name: string;
  href: string;
  exact: boolean;
  page: React.FC;
}

export const routes: Array<RouteConfig> = [
  {
    name: 'My Pickup Games',
    href: '/MyEvents/Pickups',
    exact: true,
    page: MyPickupGames,
  },
  {
    name: 'MyEvents',
    href: '/MyEvents',
    exact: true,
    page: MyEvents,
  },
  {
    name: 'Soccer Leagues',
    href: '/FindEvents/Soccer/Leagues',
    exact: true,
    page: SoccerLeagues,
  },
  {
    name: 'FindEvents',
    href: '/FindEvents',
    exact: true,
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
