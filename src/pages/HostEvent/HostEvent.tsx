import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../../components/ExploreContainer';

const HostEvent: React.FC = () => {
  return (
    <IonPage id="host-event-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Host Event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ExploreContainer name="Host Event page" />
      </IonContent>
    </IonPage>
  );
};

export default HostEvent;
