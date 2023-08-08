import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu } from '@ionic/react';

import { IMenuItem } from '../../configs/menus';
import { myEventsMenu } from '../../configs/menus/myEventsMenu';

import SubMenu from '../SubMenu';
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
      <IonContent className="ion-no-padding">
        <SubMenu<IMenuItem>
          name={myEventsMenu.menuId}
          menuItems={myEventsMenu.menuItems}
        />
      </IonContent>
    </IonMenu>
  );
};

export default MyEventsMenu;
