import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonList,
} from '@ionic/react';

import SubMenu from '../SubMenu';
import { MyEventsEspecialMenuRoutes, MyEventsMenuRoutes } from '../../Routes';

interface MyEventsMenuProps {
  contentId: string;
  defaultDisabled: boolean;
}

const MyEventsMenu: React.FC<MyEventsMenuProps> = ({ contentId, defaultDisabled }) => {
  return (
    <IonMenu menuId="MyEventsMenu" side="start" contentId={contentId} disabled={defaultDisabled}>
      <IonHeader>
        <IonToolbar color="purple">
          <IonTitle>My Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-no-padding">
        <IonList>
          <SubMenu menu="MyEventsMenu" menuRoute={MyEventsMenuRoutes} />
          <SubMenu menu="MyEventsMenu" menuRoute={MyEventsEspecialMenuRoutes} />
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MyEventsMenu;
