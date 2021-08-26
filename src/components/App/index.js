// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import components

import Home from 'src/containers/Home';
import SearchPageDisconnect from 'src/components/SearchPageDisconnect'
import Login from 'src/containers/Login';
import ProfilePage from 'src/containers/ProfilePage';
import ProjectPageDisconnect from 'src/components/ProjectPageDisconnect';
import SearchPage from 'src/components/SearchPage';

import DataProjects from 'src/data/projects';
import './style.scss';

// == Composant

function App({
  isLogged
}) {
  console.log(isLogged)
  return (
    <div className="app">
    <Switch>
      <Route path="/" exact>
        <Home projects={DataProjects}/>
      </Route>
      <Route path="/searchProjects" exact>
        <SearchPageDisconnect projects={DataProjects}/>
      </Route>
      <Route path="/searchProject" exact>
        <ProjectPageDisconnect />
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/profile">
          {/* {isLogged ? ( */}
            <ProfilePage />
          {/* ) : (
            <Redirect to="/login" />
          )} */}
      </Route>

      <Route path="/search">
            <SearchPage />
      </Route>

    </Switch>
    </div>
  )
};

App.propTypes = {
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  isLogged: false,
};

// == Export
export default App;
