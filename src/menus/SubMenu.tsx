import { IonMenuToggle, IonIcon, IonLabel, IonItem, IonList } from '@ionic/react';
import { useLocation } from 'react-router';

import { IMenuItem } from '../configs/menus';

interface SubMenuProps {
  name: string;
  menuItems: Array<IMenuItem>;
  slot?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ name, menuItems, slot = '' }) => {
  const location = useLocation();

  return (
    <IonList slot={slot}>
      {menuItems.map((menuItem) => {
        const isSelected = menuItem.sport
          ? location.pathname.endsWith(`/${menuItem.sport}/${menuItem.name}`)
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
