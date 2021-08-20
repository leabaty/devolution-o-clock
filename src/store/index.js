import { createStore, /*applyMiddleware*/ compose } from 'redux';

import reducer from 'src/reducers';

// import debug from 'src/middlewares/debug';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // applyMiddleware(recipes),
);

const store = createStore(reducer,enhancers);

export default store;
