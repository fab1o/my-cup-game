import { Preferences } from '@capacitor/preferences';

import { stringify } from '../utils/stringify';

export interface IPreferences {
  setPreference<T>(key: string, anyValue: T): Promise<void>;
  getPreference<T>(key: string): Promise<T | null>;
  removeKey(key: string): Promise<void>;
}

export async function setPreference<T>(key: string, anyValue: T) {
  const value = stringify(anyValue);

  await Preferences.set({
    key,
    value,
  });
}

export async function getPreference<T>(key: string): Promise<T | null> {
  const { value } = await Preferences.get({ key });

  if (value) {
    return JSON.parse(value);
  }

  return null;
}

export async function removeKey(key: string) {
  await Preferences.remove({ key });
}
