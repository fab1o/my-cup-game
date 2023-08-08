import { IonLabel, IonAccordion, IonItem } from '@ionic/react';

import { ICategoryMenuItem } from '../config';

import SubMenu from '../SubMenu/SubMenu';

interface FindEventsSubMenuProps {
  name: string;
  category: string;
  menuItems?: Array<ICategoryMenuItem>;
}

const FindEventsSubMenu: React.FC<FindEventsSubMenuProps> = ({
  name,
  category,
  menuItems,
}) => {
  return (
    <IonAccordion key={category} value={category}>
      <IonItem slot="header" color="light">
        <IonLabel>{category}</IonLabel>
      </IonItem>

      <SubMenu<ICategoryMenuItem> name={name} menuItems={menuItems} slot="content" />
    </IonAccordion>
  );
};

export default FindEventsSubMenu;
