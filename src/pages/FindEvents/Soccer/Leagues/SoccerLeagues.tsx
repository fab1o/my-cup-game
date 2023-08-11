import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import ExploreContainer from '../../../../components/ExploreContainer';

export const SoccerLeagues: React.FC = () => {
  return (
    <IonPage id="soccer-leagues-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="purple" />
          </IonButtons>
          <IonTitle>Soccer Leagues</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ExploreContainer name="Soccer Leagues" />
      </IonContent>
    </IonPage>
  );
};
