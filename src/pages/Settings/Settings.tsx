import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../../components/ExploreContainer';

const Settings: React.FC = () => {
  return (
    <IonPage id="settings-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ExploreContainer name="Settings page" />
      </IonContent>
    </IonPage>
  );
};

export default Settings;
