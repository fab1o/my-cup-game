import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonAccordionGroup,
} from '@ionic/react';

import { findEventsMenuItems } from '../../configs/menus';

import { DEFAULT_SPORT } from '../../configs/sports';

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
        <IonAccordionGroup value={DEFAULT_SPORT}>
          {findEventsMenuItems.map((menuItem) => (
            <FindEventsSubMenu name="FindEventsMenu" menuItems={menuItem.menuItems} sport={menuItem.sport} key={menuItem.sport} />
          ))}
        </IonAccordionGroup>
      </IonContent>
    </IonMenu>
  );
};

export default FindEventsMenu;
