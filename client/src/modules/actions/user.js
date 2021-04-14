import axios from 'axios';
import {
  SIGNUP_USER,
  CHECK_USER,
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_USER,
} from './types';

export function signupUser(dataToSubmit) {
  const request = axios
    .post(`api/signup`, dataToSubmit)
    .then(response => response.data);
  return {
    type: SIGNUP_USER,
    payload: request,
  };
}

export function checkUser(dataToSubmit) {
  const request = axios
    .post(`api/signup/checkEmail`, {
      email: dataToSubmit,
    })
    .then(response => response.data);
  return {
    type: CHECK_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`api/login`, dataToSubmit)
    .then(response => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios.get(`api/logout`).then(response => response.data);
  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios.get(`api/auth`).then(response => response.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}
