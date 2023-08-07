import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonItemGroup,
  IonAccordionGroup,
} from '@ionic/react';

import { findEventsEspecialMenuConfig } from '../../configs/menus';

import SubMenu from '../SubMenu';

import { Sports, defaultSport } from './Sports';

import FindEventsSubMenu from './FindEventsSubMenu';

interface FindEventsMenuProps {
  contentId: string;
  defaultDisabled: boolean;
}

const FindEventsMenu: React.FC<FindEventsMenuProps> = ({
  contentId,
  defaultDisabled,
}) => {
  return (
    <IonMenu
      menuId="FindEventsMenu"
      side="start"
      contentId={contentId}
      disabled={defaultDisabled}
    >
      <IonHeader>
        <IonToolbar color="purple">
          <IonTitle>Find Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-no-padding">
        <IonAccordionGroup value={defaultSport}>
          {Sports.map((sport) => (
            <FindEventsSubMenu menu="FindEventsMenu" key={sport} sport={sport} />
          ))}
        </IonAccordionGroup>
        <IonItemGroup>
          <SubMenu menu="FindEventsMenu" menuConfig={findEventsEspecialMenuConfig} />
        </IonItemGroup>
      </IonContent>
    </IonMenu>
  );
};

export default FindEventsMenu;
