import { Redirect, Route, useLocation } from 'react-router';
import { menuController } from '@ionic/core/components';
import {
  setupIonicReact,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import { routes } from './config/routes';
import { tabManager, DEFAULT_TAB } from './config/tabManager';

setupIonicReact();

const AppContainer: React.FC = () => {
  const location = useLocation();

  async function handleTabClick(e: CustomEvent<HTMLIonTabButtonElement>) {
    const name = e.detail.tab;
    const tab = tabManager.getTab(name);

    const menus = await menuController.getMenus();

    for (const menu of menus) {
      await menuController.enable(menu.menuId === tab?.menuId, menu.menuId);
    }
  }

  return (
    <IonTabs>
      <IonRouterOutlet>
        {routes.map(({ exact, name, href, page }) => (
          <Route exact={exact} key={name} path={href} component={page} />
        ))}
        <Route exact path="/">
          <Redirect to={DEFAULT_TAB.href} />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        {tabManager.tabs.map((tab) => {
          const icons = tabManager.getIcons(tab, location.pathname);

          return (
            <IonTabButton
              key={tab.name}
              tab={tab.name}
              href={tab.href}
              onClick={handleTabClick}
            >
              <IonIcon
                key={tab.name}
                aria-hidden="true"
                aria-label={tab.name}
                ios={icons.ios}
                md={icons.md}
                icon={icons.activeIcon}
              />
              <IonLabel>{tab.title}</IonLabel>
            </IonTabButton>
          );
        })}
      </IonTabBar>
    </IonTabs>
  );
};

export default AppContainer;
