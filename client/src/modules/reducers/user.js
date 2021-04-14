/* eslint-disable consistent-return */
import {
  SIGNUP_USER,
  CHECK_USER,
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_USER,
} from '../actions/types';

const { produce } = require('immer');

const initialState = {
  isLoggedIn: false,
  data: {
    success: '',
    message: '',
    hashedEmail: '',
  },
};

export default function userReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    switch (action.type) {
      case SIGNUP_USER:
        draft.isLoggedIn = false;
        draft.data = action.payload;
        break;
      case CHECK_USER:
        draft.isLoggedIn = false;
        draft.data = action.payload;
        break;
      case LOGIN_USER:
        draft.isLoggedIn = true;
        draft.data = action.payload;
        break;
      case LOGOUT_USER:
        draft.isLoggedIn = false;
        draft.data = null;
        break;
      case AUTH_USER:
        draft.isLoggedIn = action.payload.isAuth;
        draft.data = action.payload;
        break;
      default:
        return prevState;
    }
  });
}
