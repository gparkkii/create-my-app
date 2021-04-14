import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

const reducer = require('./reducers/index');

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk,
)(createStore);

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(createStoreWithMiddleware())
    : composeWithDevTools(applyMiddleware(createStoreWithMiddleware(), logger));

const store = createStoreWithMiddleware(reducer, enhancer);
module.exports = store;
