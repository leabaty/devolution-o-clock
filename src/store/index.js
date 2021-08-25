import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import projects from 'src/middlewares/projects';
import users from 'src/middlewares/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(projects, users),
);

const store = createStore(reducer,enhancers);

export default store;
