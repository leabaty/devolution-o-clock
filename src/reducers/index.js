import { combineReducers } from 'redux';
// combineReducers est une fonction de Redux qui permet d'agréger plusieurs
// sous-reducers

import searchReducer from './search';
import userReducer from './user';
import projectReducer from './project';

// on passe en argument un objet qui viendra prendre les propriétés principales
// de notre state global
// ici le state global aura 2 propriétés principales "search" et "user"
// dans ces propritétés on aura les sous-states qui sont dans les fichiers
// des sous-reducers
const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  project : projectReducer,
});

export default rootReducer;