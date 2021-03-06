/* eslint-disable consistent-return */
import {
  USER_FORM,
  PROFILE_FORM,
  AVATAR_FORM,
  RESET_FORM,
} from '../actions/types';

const { produce } = require('immer');

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  nickname: '',
  userDescription: '',
  url: '',
  profileImage: '',
  profileImageType: '',
  hashedEmail: '',
};

export default function profileReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    switch (action.type) {
      case USER_FORM:
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.password = action.payload.password;
        draft.passwordConfirm = action.payload.passwordConfirm;
        break;
      case PROFILE_FORM:
        draft.nickname = action.payload.nickname;
        draft.userDescription = action.payload.userDescription;
        draft.url = action.payload.url;
        break;
      case AVATAR_FORM:
        draft.profileImage = action.payload.profileImage;
        draft.profileImageType = action.payload.profileImageType;
        draft.hashedEmail = action.payload.hashedEmail;
        break;
      case RESET_FORM:
        return initialState;
      default:
        return prevState;
    }
  });
}
