import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import ExploreContainer from '../../components/ExploreContainer';

import './MyEvents.css';
import { MyEventsMenuRoutes, Route } from '../../Routes';

const MyEvents: React.FC = () => {
  // const [route, setRoute] = useState<Route>();
  // const location = useLocation();

  // useEffect(() => {
  //   setRoute(MyEventsMenuRoutes.find((route) => route.href === location.pathname));
  // }, [location]);

  return (
    <IonPage id="my-events-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          {/* <IonTitle>{route?.title}</IonTitle> */}
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
