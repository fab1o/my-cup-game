import { IonIcon, IonLabel, IonItemDivider, IonItemGroup } from '@ionic/react';
import { useState } from 'react';
import {
  chevronDownOutline,
  chevronDownSharp,
  chevronForwardOutline,
  chevronForwardSharp,
} from 'ionicons/icons';

import SubMenu from '../SubMenu';
import { FindEventsMenuRoutes } from '../../Routes';

interface FindEventsSubMenuProps {
  menu: string;
  sport: string;
  hiddenByDefault: boolean;
}

const FindEventsSubMenu: React.FC<FindEventsSubMenuProps> = ({
  menu,
  sport,
  hiddenByDefault,
}) => {
  const [hidden, setHidden] = useState<boolean>(hiddenByDefault);

  function toggleHidden() {
    setHidden((hidden) => !hidden);
  }

  return (
    <IonItemGroup>
      <IonItemDivider key={sport} onClick={toggleHidden}>
        <IonLabel>{sport}</IonLabel>
        <IonIcon
          slot="end"
          color="medium"
          size="large"
          ios={hidden ? chevronDownOutline : chevronForwardOutline}
          md={hidden ? chevronDownSharp : chevronForwardSharp}
        />
      </IonItemDivider>

      <SubMenu
        menu={menu}
        hidden={hidden}
        menuRoute={FindEventsMenuRoutes}
        sport={sport}
      />
    </IonItemGroup>
  );
};

export default FindEventsSubMenu;
