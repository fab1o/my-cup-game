import { IonMenuToggle, IonIcon, IonLabel, IonItem } from '@ionic/react';
import { useLocation } from 'react-router';

import { Route } from '../Routes';

interface SubMenuProps {
  menuRoute: Array<Route>;
  menu: string;
  hidden?: boolean;
  sport?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ menuRoute, menu, sport, hidden = false }) => {
  const location = useLocation();

  return (
    <>
      {menuRoute.map((route) => {
        const label = sport ? route.name : route.title;

        const routerLink = route.href.replace('<sport>', sport as string);

        const className = sport
          ? location.pathname.includes(`/${sport}/${route.name}`)
            ? 'selected'
            : ''
          : location.pathname.includes(`/${route.name}`)
          ? 'selected'
          : '';

        return (
          <IonMenuToggle menu={menu} hidden={hidden} key={route.name} autoHide={false}>
            <IonItem
              hidden={hidden}
              className={className}
              routerLink={routerLink}
              routerDirection="none"
              lines="full"
              detail={true}
              style={route.itemStyle}
            >
              <IonIcon slot="start" ios={route.ios} md={route.md} />
              <IonLabel style={route.labelStyle}>{label}</IonLabel>
            </IonItem>
          </IonMenuToggle>
        );
      })}
    </>
  );
};

export default SubMenu;
