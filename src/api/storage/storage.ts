import { Drivers, Storage } from '@ionic/storage';
import CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

const store = new Storage({
  driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage],
});

let storage;

export async function initStorage() {
  await store.defineDriver(CordovaSQLiteDriver);

  storage = await store.create();
}

initStorage();

export { storage };
