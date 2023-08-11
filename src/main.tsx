import React from 'react';
import { createRoot } from 'react-dom/client';

import './api/storage/storage';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

import { PreferencesDataProvider } from './PreferencesDataContext';

root.render(
  <React.StrictMode>
    <PreferencesDataProvider>
      <App />
    </PreferencesDataProvider>
  </React.StrictMode>
);
