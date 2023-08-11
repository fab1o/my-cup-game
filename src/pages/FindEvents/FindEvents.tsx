import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';

import ExploreContainer from '../../components/ExploreContainer';

export const FindEvents: React.FC = () => {
  return (
    <IonPage id="find-events-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="purple" />
          </IonButtons>
          <IonTitle>Find Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ExploreContainer name="Find Events page" />
      </IonContent>
    </IonPage>
  );
};
