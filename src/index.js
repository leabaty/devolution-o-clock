// == Import : npm
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from 'src/store'

// == Import : local
import App from "src/components/App";


const { persistor, store } = configureStore();

const rootReactElement = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);

const target = document.getElementById("root");
render(rootReactElement, target);
