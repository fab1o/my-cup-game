import { IonMenuToggle, IonIcon, IonLabel, IonItem } from '@ionic/react';
import { useLocation } from 'react-router';

import { Route, IMenuRoutes } from '../Routes';

interface SubMenuProps {
  menuRoute: IMenuRoutes;
  menu: string;
  hidden?: boolean;
  sport?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ menuRoute, menu, sport, hidden = false }) => {
  const location = useLocation();

  const menuRouteNames = Object.keys(menuRoute);

  return (
    <>
      {menuRouteNames.map((name: string) => {
        const route = menuRoute[name];

        const label = sport ? name : route.title;
        const routerLink = route.href.replace('<sport>', sport as string);

        const isSelected = sport
          ? location.pathname.includes(`/${sport}/${name}`)
          : location.pathname.includes(`/${name}`);

        const className = isSelected ? 'selected' : '';

        const icon = isSelected ? route.activeIcon : undefined;
        const ios = isSelected ? undefined : route.ios;
        const md = isSelected ? undefined : route.md;

        return (
          <IonMenuToggle menu={menu} hidden={hidden} key={name} autoHide={false}>
            <IonItem
              hidden={hidden}
              className={className}
              routerLink={routerLink}
              routerDirection="none"
              lines="full"
              detail={true}
              style={route.itemStyle}
            >
              <IonIcon slot="start" ios={ios} md={md} icon={icon} />
              <IonLabel style={route.labelStyle}>{label}</IonLabel>
            </IonItem>
          </IonMenuToggle>
        );
      })}
    </>
  );
};

export default SubMenu;
