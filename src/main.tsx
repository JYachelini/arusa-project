import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import { ThemeConfig } from './config/theme.config';
import './index.css';
import store, { persistor } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeConfig>
          <App />
        </ThemeConfig>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
