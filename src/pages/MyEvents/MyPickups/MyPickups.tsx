import { useEffect, useState } from 'react';
import {
  IonSegmentCustomEvent,
  SegmentChangeEventDetail,
  RefresherEventDetail,
} from '@ionic/core';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonItem,
  IonIcon,
} from '@ionic/react';
import { ellipse } from 'ionicons/icons';

export const MyPickupGames: React.FC = () => {
  const names = [
    'Burt Bear',
    'Charlie Cheetah',
    'Donald Duck',
    'Eva Eagle',
    'Ellie Elephant',
    'Gino Giraffe',
    'Isabella Iguana',
    'Karl Kitten',
    'Lionel Lion',
    'Molly Mouse',
    'Paul Puppy',
    'Rachel Rabbit',
    'Ted Turtle',
  ];
  const [items, setItems] = useState<{ name: string; unread: boolean }[]>([]);
  const [all, setAll] = useState(false);

  let didInit = false;

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      addItems(5);
    }
  }, []);

  function onChange(e: IonSegmentCustomEvent<SegmentChangeEventDetail>) {
    setAll(e.detail.value === 'all');
  }

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      addItems(3, true);
      event.detail.complete();
    }, 2000);
  }

  function chooseRandomName() {
    return names[Math.floor(Math.random() * names.length)];
  }

  function addItems(count: number, unread = false) {
    for (let i = 0; i < count; i++) {
      setItems((current) => [{ name: chooseRandomName(), unread }, ...current]);
    }
  }

  return (
    <IonPage id="my-events-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonSegment value="" onIonChange={onChange}>
            <IonSegmentButton value="">
              <IonLabel>Pickups</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="all">
              <IonLabel>All</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonList>
          {items.map((item, i) => (
            <IonItem key={i} button={true}>
              <IonIcon
                slot="start"
                color="primary"
                icon={item.unread ? ellipse : ''}
              ></IonIcon>
              <IonLabel>
                <h2>{item.name}</h2>
                <p>New message from {item.name}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
