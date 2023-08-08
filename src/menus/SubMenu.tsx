import { useLocation } from 'react-router';

import { IonMenuToggle, IonIcon, IonLabel, IonItem, IonList } from '@ionic/react';
import { ICategoryMenuItem, IMenuItem } from '../configs/menus';

interface SubMenuProps<T extends IMenuItem | ICategoryMenuItem> {
  name: string;
  menuItems?: Array<T>;
  slot?: string;
}

const SubMenu: <T extends IMenuItem | ICategoryMenuItem>(props: SubMenuProps<T>) => React.ReactElement<SubMenuProps<T>> = (props) => {
  const { name, menuItems, slot = '' } = props;
  const location = useLocation();

  return (
    <IonList slot={slot}>
      {menuItems?.map((menuItem) => {
        const isSelected = 'category' in menuItem && menuItem.category
          ? location.pathname.endsWith(`/${menuItem.category}/${menuItem.name}`)
          : location.pathname.endsWith(`/${menuItem.name}`);

        const className = isSelected ? 'selected' : undefined;
        const icon = isSelected ? menuItem.activeIcon : undefined;
        const ios = isSelected ? undefined : menuItem.ios;
        const md = isSelected ? undefined : menuItem.md;

        return (
          <IonMenuToggle menu={name} key={menuItem.name} autoHide={false}>
            <IonItem
              className={className}
              routerLink={menuItem.href}
              routerDirection="none"
              lines="full"
              detail={true}
              style={menuItem.itemStyle}
            >
              <IonIcon slot="start" ios={ios} md={md} icon={icon} />
              <IonLabel style={menuItem.labelStyle}>{menuItem.title}</IonLabel>
            </IonItem>
          </IonMenuToggle>
        );
      })}
    </IonList>
  );
};

export default SubMenu;
