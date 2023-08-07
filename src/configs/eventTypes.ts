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

interface EventType {
  name: string;
  ios: string;
  md: string;
  title: string;
  activeIcon: string;
}

export const eventTypes: Array<EventType> = [
  {
    name: 'Pickups',
    ios: peopleCircleOutline,
    md: peopleCircleSharp,
    activeIcon: peopleCircle,
    title: 'Pick-up Games',
  },
  {
    name: 'Leagues',
    ios: trophyOutline,
    md: trophySharp,
    activeIcon: trophy,
    title: 'Leagues',
  },
  {
    name: 'Tournaments',
    ios: medalOutline,
    md: medalSharp,
    activeIcon: medal,
    title: 'Tournaments',
  },
  {
    name: 'Clinics',
    ios: fitnessOutline,
    md: fitnessSharp,
    activeIcon: fitness,
    title: 'Clinics',
  },
  {
    name: 'Parties',
    ios: balloonOutline,
    md: balloonSharp,
    activeIcon: balloon,
    title: 'Parties',
  },
];

export const specialEventTypes: Array<EventType> = [
  {
    name: 'Parties',
    ios: balloonOutline,
    md: balloonSharp,
    activeIcon: balloon,
    title: 'Parties',
  },
];
