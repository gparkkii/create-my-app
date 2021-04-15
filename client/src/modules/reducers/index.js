import { combineReducers } from 'redux';
import profileReducer from './profile';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
});

export default rootReducer;
