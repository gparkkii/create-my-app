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
  data: {
    isAuth: '',
    success: '',
    message: '',
    hashedEmail: '',
    error: '',
  },
  profile: {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    userDescription: '',
    url: '',
    profileImage: '',
    profileImageType: '',
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
        break;
      case LOGOUT_USER:
        draft.data = action.payload;
        draft.profile = undefined;
        break;
      case AUTH_USER:
        draft.data.isAuth = action.payload.isAuth;
        draft.profile = action.payload.profile;
        break;
      default:
        return prevState;
    }
  });
}
