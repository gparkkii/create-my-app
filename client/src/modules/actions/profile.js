import { USER_FORM, PROFILE_FORM, AVATAR_FORM } from './types';

export function addUserForm(dataToSubmit) {
  return {
    type: USER_FORM,
    payload: dataToSubmit,
  };
}

export function addProfileForm(dataToSubmit) {
  return {
    type: PROFILE_FORM,
    payload: dataToSubmit,
  };
}

export function addAvatarForm(dataToSubmit) {
  return {
    type: AVATAR_FORM,
    payload: dataToSubmit,
  };
}
