import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './components/App/App';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </HashRouter>
  </Provider>

);