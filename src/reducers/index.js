import { combineReducers } from 'redux';

import searchReducer from './search';
import loginReducer from './login';
import projectReducer from './project';
import userReducer from './user';
import projectformReducer from './projectform';

const rootReducer = combineReducers({
  search: searchReducer,
  login: loginReducer,
  project : projectReducer,
  user: userReducer,
  projectform : projectformReducer,
});

export default rootReducer;
