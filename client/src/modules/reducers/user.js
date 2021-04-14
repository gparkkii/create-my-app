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
    isAuth: '',
    error: '',
  },
};

export default function userReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    switch (action.type) {
      case SIGNUP_USER:
        draft.data = action.payload;
        break;
      case CHECK_USER:
        draft.data = action.payload;
        break;
      case LOGIN_USER:
        draft.data = action.payload;
        draft.isLoggedIn = action.payload.isLoggedIn;
        break;
      case LOGOUT_USER:
        draft.data = action.payload;
        draft.isLoggedIn = action.payload.isLoggedIn;
        break;
      case AUTH_USER:
        draft.data = action.payload;
        break;
      default:
        return prevState;
    }
  });
}
