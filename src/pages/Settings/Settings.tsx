import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';

import type { SelectCustomEvent, ToggleCustomEvent } from '@ionic/react';

import { usePreferencesDataProvider } from '../../PreferencesDataContext';
import * as preferenceKeys from '../../api/capacitor/preferenceKeys';


import './Settings.css';
import { categories } from '../../api/models/categories';
import { ILevel, levels } from '../../api/models/level';
import { star, starHalf } from 'ionicons/icons';

export const Settings: React.FC = () => {
  const { setPreference, getPreference, removeKey } = usePreferencesDataProvider();

  const [level, setLevel] = useState<ILevel | undefined>();
  const [category, setCategory] = useState<string>('');
  const [stars, setStars] = useState<Array<boolean>>([]);

  const [disableDarkMode, setDisableDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  async function toggleDarkTheme(darkMode: boolean) {
    document.body.classList.toggle('dark', darkMode);
    if (darkMode) {
      await setPreference(preferenceKeys.DARK, true);
    } else {
      await removeKey(preferenceKeys.DARK);
    }
  }

  useEffect(() => {
    async function loadSettings() {
      const levelSetting = await getPreference<string>(preferenceKeys.FAVE_LEVEL);

      if (levelSetting) {
        const level = levels.find((lev) => lev.symbol === levelSetting);
        if (level) {
          setLevel(level);
          setStartsByLevel(level);
        }
      }

      const faveCategorySetting = await getPreference<string>(preferenceKeys.FAVE_SPORT);

      if (faveCategorySetting) {
        setCategory(faveCategorySetting);
      }
    }

    async function loadDarkModeSettings() {
      const isDark = await getPreference<boolean>(preferenceKeys.DARK);

      if (isDark) {
        document.body.classList.toggle('dark', isDark);
        setDisableDarkMode(false);
        setDarkMode(isDark);
      }
    }

    loadSettings();

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefersDark.matches) {
      setDisableDarkMode(true);
      setDarkMode(true);
    } else {
      loadDarkModeSettings();
    }

    prefersDark.addEventListener('change', (mediaQuery) => {
      setDisableDarkMode(mediaQuery.matches);
      setDarkMode(mediaQuery.matches);
    });
  }, []);

  async function toggleChange(ev: ToggleCustomEvent) {
    toggleDarkTheme(ev.detail.checked);
    setDarkMode(ev.detail.checked);
  }

  async function onCategoryChanged(e: SelectCustomEvent) {
    setCategory(e.detail.value);
    await setPreference(preferenceKeys.FAVE_SPORT, e.detail.value);
  }

  function setStartsByLevel(level: ILevel) {
    const stars = [];

    const max = Math.ceil(level.stars);

    for (let i = 0; i < max; i++) {
      if (i === Math.floor(level.stars)) {
        stars.push(false);
      } else {
        stars.push(true);
      }
    }

    setStars(stars);
  }

  async function onLevelChanged(e: SelectCustomEvent) {
    const level = e.detail.value;

    setLevel(level);
    setStartsByLevel(level);

    await setPreference(preferenceKeys.FAVE_LEVEL, level.symbol);
  }

  return (
    <IonPage id="settings-content" className="settings">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonListHeader>Appearance</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonToggle
              disabled={disableDarkMode}
              color="purple"
              checked={darkMode}
              onIonChange={toggleChange}
              justify="space-between"
            >
              Dark Mode
            </IonToggle>
          </IonItem>
          {/* <IonItem>
            <IonToggle disabled color="purple" justify="space-between">
              Highlight Busy Days on Calendar
            </IonToggle>
          </IonItem> */}
        </IonList>

        {/* <IonList inset={true}>
  <IonItem button={true}>Text Size</IonItem>
  <IonItem>
    <IonToggle color="purple" justify="space-between">
      Bold Text
    </IonToggle>
  </IonItem>
</IonList> */}

        <IonListHeader>Favorite Sport</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonSelect
              title="Sport"
              color="purple"
              placeholder="Sport"
              interface="action-sheet"
              justify="space-between"
              onIonChange={onCategoryChanged}
              value={category}
            >
              {categories.map((category) => (
                <IonSelectOption key={category} value={category}>
                  {category}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem className="stars">
            <IonSelect
              justify="space-between"
              color="purple"
              title="Level"
              placeholder="Level"
              interface="action-sheet"
              onIonChange={onLevelChanged}
              value={level}
            >
              {levels.map((lev) => (
                <IonSelectOption key={lev.key} value={lev}>
                  {lev.title}
                </IonSelectOption>
              ))}
            </IonSelect>
            <IonGrid className="ion-no-padding">
              <IonRow className="ion-justify-content-end no-wrap">
                {stars.map((full, i) => (
                  <IonIcon key={i} icon={full ? star : starHalf} />
                ))}
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonList>

        {/* <IonList inset={true}>
          <IonItem button={true}>
            <IonLabel>Night Shift</IonLabel>
            <IonText slot="end" color="medium">
              9:00 PM to 8:00 AM
            </IonText>
          </IonItem>
        </IonList> */}
      </IonContent>
    </IonPage>
  );
};
