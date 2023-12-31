import { Redirect, Route, useLocation } from 'react-router';
import { menuController } from '@ionic/core/components';
import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import { routes } from '../navigation/routes';
import { navManager, DEFAULT_NAV } from '../navigation/navManager';

const Tabs: React.FC = () => {
  const location = useLocation();

  async function handleTabClick(e: CustomEvent<HTMLIonTabButtonElement>) {
    const name = e.detail.tab;
    const nav = navManager.getNav(name);

    const menus = await menuController.getMenus();

    for (const menu of menus) {
      await menuController.enable(menu.menuId === nav?.menuId, menu.menuId);
    }
  }

  return (
    <IonTabs>
      <IonRouterOutlet>
        {routes.map(({ exact, name, href, page }) => (
          <Route exact={exact} key={name} path={href} component={page} />
        ))}
        <Route exact path="/">
          <Redirect to={DEFAULT_NAV.href} />
        </Route>
      </IonRouterOutlet>

      <IonTabBar className="custom" slot="bottom">
        {navManager.navs.map((nav) => {
          const icons = navManager.getIcons(nav, location.pathname);

          return (
            <IonTabButton
              className="custom"
              key={nav.name}
              tab={nav.name}
              href={nav.href}
              onClick={handleTabClick}
            >
              <IonIcon
                key={nav.name}
                aria-hidden="true"
                ios={icons.ios}
                md={icons.md}
                icon={icons.activeIcon}
              />
            </IonTabButton>
          );
        })}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
