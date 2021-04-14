import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from 'modules/reducers/index';
import App from './App';
import 'styles/index.css';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk,
)(createStore);
const store = createStoreWithMiddleware(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
