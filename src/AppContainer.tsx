import { menuController } from '@ionic/core/components';
import {
  setupIonicReact,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import { useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router';

import { routes } from './configs/routes';
import { tabs, defaultTabName } from './configs/tabs';

import FindEventsMenu from './menus/FindEventsMenu/FindEventsMenu';
import MyEventsMenu from './menus/MyEventsMenu/MyEventsMenu';

setupIonicReact();

const tabNames = Object.keys(tabs);
const defaultHref = tabs[defaultTabName].href;

const AppContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(defaultTabName);

  const location = useLocation();

  // fix for issue where menu button disappears
  const isFindsEventsRoute = location.pathname.startsWith(defaultHref) === false;
  const isMyEventsRoute = location.pathname.startsWith(defaultHref) === true;
  // ***

  async function handleTabClick(name?: string) {
    if (name) {
      setActiveTab(name);
      await menuController.enable(true, name);
    }
  }

  return (
    <IonSplitPane when="sm" contentId="main-content">
      <FindEventsMenu contentId="main-content" defaultDisabled={isFindsEventsRoute} />
      <MyEventsMenu contentId="main-content" defaultDisabled={isMyEventsRoute} />

      <IonPage id="main-content">
        <IonTabs onIonTabsDidChange={(e) => handleTabClick(e.detail.tab)}>
          <IonRouterOutlet>
            {routes.map((route) => (
              <Route
                exact={route.exact}
                key={route.name}
                path={route.href}
                component={route.page}
              />
            ))}
            <Route exact path="/">
              <Redirect to={defaultHref} />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            {tabNames.map((name: string) => {
              const tabRoute = tabs[name];

              const icon = name === activeTab ? tabRoute.activeIcon : undefined;
              const ios = name === activeTab ? undefined : tabRoute.ios;
              const md = name === activeTab ? undefined : tabRoute.md;

              return (
                <IonTabButton key={name} tab={name} href={tabRoute.href}>
                  <IonIcon
                    aria-hidden="true"
                    aria-label={name}
                    ios={ios}
                    md={md}
                    icon={icon}
                  />
                  <IonLabel>{tabRoute.title}</IonLabel>
                </IonTabButton>
              );
            })}
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </IonSplitPane>
  );
};

export default AppContainer;
