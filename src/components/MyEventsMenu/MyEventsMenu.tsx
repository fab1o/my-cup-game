import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu } from '@ionic/react';

import { IMenuItem } from '../config';
import { myEventsMenu } from './config/myEventsMenu';

import SubMenu from '../SubMenu/SubMenu';

interface MyEventsMenuProps {
  contentId: string;
}

const MyEventsMenu: React.FC<MyEventsMenuProps> = ({ contentId }) => {
  return (
    <IonMenu menuId={myEventsMenu.menuId} side="start" contentId={contentId}>
      <IonHeader>
        <IonToolbar color="purple">
          <IonTitle>{myEventsMenu.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="custom ion-no-padding">
        <SubMenu<IMenuItem>
          name={myEventsMenu.menuId}
          menuItems={myEventsMenu.menuItems}
        />
      </IonContent>
    </IonMenu>
  );
};

export default MyEventsMenu;
