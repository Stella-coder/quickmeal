import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from 'reportWebVitals';
import { AuthState } from 'utils/AuthState';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store} from "utils/store"
import persistStore from 'redux-persist/lib/storage';
// import { AppProviders } from 'context';

let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    {/* <AppProviders> */}
    <AuthState>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      <App />
      </PersistGate>
      </Provider>
      </AuthState>
      
    {/* </AppProviders> */}
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
