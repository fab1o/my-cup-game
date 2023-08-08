import { cog, cogOutline, cogSharp } from 'ionicons/icons';
import { IMenu, IMenuItem } from '.';

const settingsMenuItems: Array<IMenuItem> = [
  {
    name: 'UISettings',
    ios: cogOutline,
    md: cogSharp,
    activeIcon: cog,
    title: 'UI Settings',
    href: '/Settings/UI',
  },
];

export const settingsMenu: IMenu<IMenuItem> = {
  menuId: 'SettingsMenu',
  title: 'Settings',
  baseHref: '/Settings',
  menuItems: settingsMenuItems
};
