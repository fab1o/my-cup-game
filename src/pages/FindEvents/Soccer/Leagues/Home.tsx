import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../../../../components/ExploreContainer';

const Settings: React.FC = () => {
  return (
    <IonPage id="settings-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Soccer Leagues</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ExploreContainer name="Soccer Leagues" />
      </IonContent>
    </IonPage>
  );
};

export default Settings;
