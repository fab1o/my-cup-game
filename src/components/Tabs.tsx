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

import { routes } from '../configs/routes';
import { tabManager, DEFAULT_TAB } from '../configs/tabs';

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
          const isSelected = location.pathname.startsWith(tab.href);

          const icon = isSelected ? tab.activeIcon : undefined;
          const ios = isSelected ? undefined : tab.ios;
          const md = isSelected ? undefined : tab.md;

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
                ios={ios}
                md={md}
                icon={icon}
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
