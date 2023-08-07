import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonItemGroup,
} from '@ionic/react';

import { Sports } from '../Sports';

import FindEventsSubMenu from './FindEventsSubMenu';
import SubMenu from '../SubMenu';
import { FindEventsEspecialMenuRoutes } from '../../Routes';

interface FindEventsMenuProps {
  contentId: string;
  defaultDisabled: boolean;
}

const FindEventsMenu: React.FC<FindEventsMenuProps> = ({ contentId, defaultDisabled }) => {
  return (
    <IonMenu menuId="FindEventsMenu" side="start" contentId={contentId} disabled={defaultDisabled}>
      <IonHeader>
        <IonToolbar color="purple">
          <IonTitle>Find Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-no-padding">
        {Sports.map((sport, i) => (
          <FindEventsSubMenu
            menu="FindEventsMenu"
            key={sport}
            sport={sport}
            hiddenByDefault={i !== 0}
          />
        ))}
        <IonItemGroup>
          <SubMenu menu="FindEventsMenu" menuRoute={FindEventsEspecialMenuRoutes} />
        </IonItemGroup>
      </IonContent>
    </IonMenu>
  );
};

export default FindEventsMenu;
