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

import { Redirect, Route, useLocation } from 'react-router';

import { TabRoutes } from './Routes';
import FindEventsMenu from './menus/FindEventsMenu/FindEventsMenu';
import MyEventsMenu from './menus/MyEventsMenu/MyEventsMenu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './App.css';

setupIonicReact();

const AppContainer: React.FC = () => {
  const location = useLocation();

  const defaultHref = '/FindEvents';

  const isFindsEventsRoute = location.pathname.startsWith(defaultHref) === false;
  const isMyEventsRoute = location.pathname.startsWith(defaultHref) === true;

  async function handleTabClick(name?: string) {
    if (name) {
      await menuController.enable(true, name);
    }
  }

  return (
    <IonSplitPane when="sm" contentId="main-content">
      <FindEventsMenu
        contentId="main-content"
        defaultDisabled={isFindsEventsRoute}
      ></FindEventsMenu>
      <MyEventsMenu
        contentId="main-content"
        defaultDisabled={isMyEventsRoute}
      ></MyEventsMenu>

      <IonPage id="main-content">
        <IonTabs>
          <IonRouterOutlet>
            {TabRoutes.map((tabRoute) => (
              <Route key={tabRoute.name} path={tabRoute.href} component={tabRoute.page} />
            ))}
            <Route exact path="/">
              <Redirect to={defaultHref} />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {TabRoutes.map((tabRoute) => (
              <IonTabButton
                key={tabRoute.name}
                tab={tabRoute.name}
                href={tabRoute.href}
                onClick={() => handleTabClick(tabRoute.menu)}
              >
                <IonIcon aria-hidden="true" ios={tabRoute.ios} md={tabRoute.md} />
                <IonLabel>{tabRoute.title}</IonLabel>
              </IonTabButton>
            ))}
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </IonSplitPane>
  );
};

export default AppContainer;
