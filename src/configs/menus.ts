import {
  medalOutline,
  medalSharp,
  trophyOutline,
  trophySharp,
  peopleCircleOutline,
  peopleCircleSharp,
  fitnessOutline,
  fitnessSharp,
  balloonOutline,
  balloonSharp,
  peopleCircle,
  trophy,
  medal,
  fitness,
  balloon,
} from 'ionicons/icons';

export interface MenuItemConfig {
  title: string;
  href: string;

  ios?: string;
  md?: string;
  activeIcon?: string;
  itemStyle?: {
    [key: string]: any;
  };
  labelStyle?: {
    [key: string]: any;
  };
}

export interface MenuConfig {
  [name: string]: MenuItemConfig;
}

export const myEventsMenuConfig: MenuConfig = {
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

export const findEventsMenuConfig: MenuConfig = {
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

export const findEventsEspecialMenuConfig: MenuConfig = {
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

export const myEventsEspecialMenuConfig: MenuConfig = {
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
