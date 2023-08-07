import { IonLabel, IonAccordion, IonItem, IonList } from '@ionic/react';

import { IMenuItem } from '../../configs/menus';

import SubMenu from '../SubMenu';

interface FindEventsSubMenuProps {
  name: string;
  sport: string;
  menuItems: Array<IMenuItem>;
}

const FindEventsSubMenu: React.FC<FindEventsSubMenuProps> = ({
  name,
  sport,
  menuItems,
}) => {
  return (
    <IonAccordion key={sport} value={sport}>
      <IonItem slot="header" color="light">
        <IonLabel>{sport}</IonLabel>
      </IonItem>

      <SubMenu name={name} menuItems={menuItems} slot="content" />
    </IonAccordion>
  );
};

export default FindEventsSubMenu;
