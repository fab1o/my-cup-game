import React from 'react';

import * as Preferences from './api/capacitor/preferences';

export const PreferencesDataContext = React.createContext<
  Preferences.IPreferences | undefined
>(undefined);

interface Props {
  children: React.ReactNode;
}

export const PreferencesDataProvider: React.FC<Props> = ({ children }) => {
  return (
    <PreferencesDataContext.Provider value={Preferences}>
      {children}
    </PreferencesDataContext.Provider>
  );
};

export default PreferencesDataContext;

export const usePreferencesDataProvider = () =>
  React.useContext<Preferences.IPreferences | undefined>(PreferencesDataContext)!;
