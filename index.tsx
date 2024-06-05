import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { App } from './src/components/App/App';
import { store } from './src/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
