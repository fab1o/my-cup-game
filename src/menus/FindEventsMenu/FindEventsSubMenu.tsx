import { IonLabel, IonAccordion, IonItem } from '@ionic/react';

import { findEventsMenuConfig } from '../../configs/menus';

import SubMenu from '../SubMenu';

interface FindEventsSubMenuProps {
  menu: string;
  sport: string;
}

const FindEventsSubMenu: React.FC<FindEventsSubMenuProps> = ({ menu, sport }) => {
  return (
    <IonAccordion key={sport} value={sport}>
      <IonItem slot="header" color="light">
        <IonLabel>{sport}</IonLabel>
      </IonItem>

      <div slot="content">
        <SubMenu menu={menu} menuConfig={findEventsMenuConfig} sport={sport} />
      </div>
    </IonAccordion>
  );
};

export default FindEventsSubMenu;
