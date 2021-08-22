import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import projects from 'src/middlewares/projects';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(projects),
);

const store = createStore(reducer,enhancers);

export default store;
