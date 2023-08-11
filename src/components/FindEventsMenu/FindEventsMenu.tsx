import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonAccordionGroup,
} from '@ionic/react';

import { findEventsMenu } from './config/findEventsMenu';
import { DEFAULT_CATEGORY } from '../../api/models/categories';

import FindEventsSubMenu from './FindEventsSubMenu';

interface FindEventsMenuProps {
  contentId: string;
  category?: string;
}

const FindEventsMenu: React.FC<FindEventsMenuProps> = ({
  contentId,
  category = DEFAULT_CATEGORY,
}) => {
  return (
    <IonMenu menuId={findEventsMenu.menuId} side="start" contentId={contentId}>
      <IonHeader>
        <IonToolbar color="purple">
          <IonTitle>{findEventsMenu.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="custom ion-no-padding">
        <IonAccordionGroup value={category}>
          {findEventsMenu.menuItems.map((menuItem) => (
            <FindEventsSubMenu
              name="FindEventsMenu"
              menuItems={menuItem.menuItems}
              category={menuItem.category}
              key={menuItem.category}
            />
          ))}
        </IonAccordionGroup>
      </IonContent>
    </IonMenu>
  );
};

export default FindEventsMenu;
