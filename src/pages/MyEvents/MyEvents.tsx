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

const MyEvents: React.FC = () => {
  return (
    <IonPage id="my-events-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>My Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ExploreContainer name="My Events page" />
      </IonContent>
    </IonPage>
  );
};

export default MyEvents;
