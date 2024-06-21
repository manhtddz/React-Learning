import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux'
import configureStore from './store/reducers/configureStore.js';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer.js'
import loggerMiddleware from './store/middleware/logger.js'
import monitorReducerEnhancer from './store/enhancers/monitorReducers.js'
import App from './views/App';
import reportWebVitals from './reportWebVitals';

const store = configureStore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
