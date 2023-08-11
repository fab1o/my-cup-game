import { useEffect } from 'react';

import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonPage, IonSplitPane, setupIonicReact } from '@ionic/react';

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

import FindEventsMenu from './components/FindEventsMenu/FindEventsMenu';
import MyEventsMenu from './components/MyEventsMenu/MyEventsMenu';

import Navigation from './components/navigation/Navigation';

import { usePreferencesDataProvider } from './PreferencesDataContext';

import * as preferenceKeys from './api/capacitor/preferenceKeys';

import './theme/variables.css';

import './App.css';

setupIonicReact();

const App: React.FC = () => {
  const { getPreference } = usePreferencesDataProvider();

  useEffect(() => {
    async function checkDark() {
      const isDark = await getPreference<boolean>(preferenceKeys.DARK);
      if (isDark != null) {
        document.body.classList.toggle('dark', isDark);
      }
    }

    checkDark();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane when="sm" contentId="main-content">
          <FindEventsMenu contentId="main-content" />
          <MyEventsMenu contentId="main-content" />

          <IonPage id="main-content">
            <Navigation type="Tabs" />
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
