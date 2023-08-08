export interface IMenuItem {
  name: string;
  title: string;
  href?: string;
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

export interface ICategoryMenuItem extends IMenuItem {
  category: string;
  menuItems?: Array<ICategoryMenuItem>;
}

export interface IMenu<T extends IMenuItem> {
  menuId: string;
  title: string;
  baseHref: string;
  menuItems: Array<T>;
}
