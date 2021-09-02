// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import components

import Home from 'src/containers/Home';
import SearchPageDisconnect from 'src/containers/SearchPageDisconnect'
import Login from 'src/containers/Login';
import ProfilePage from 'src/containers/ProfilePage';
import ProjectPageDisconnect from 'src/components/ProjectPageDisconnect';
import ProfilePageForm from 'src/containers/ProfilePageForm';
import SearchPage from 'src/containers/SearchPage';
import SearchProjectsResults from 'src/containers/SearchProjectsResults';
import SearchProjectsResult from 'src/containers/SearchProjectsResult';
import BoardPageParticipant from 'src/containers/BoardPageParticipant';
import BoardPageProjectBearer from 'src/containers/BoardPageProjectBearer';
import SearchUsersResults from 'src/containers/SearchUsersResults';
import SearchUsersResult from 'src/containers/SearchUsersResult';
import ProjectForm from 'src/containers/ProjectForm';

import DataProjects from 'src/data/projects';
import './style.scss';

// == Composant

function App({
  isLogged
}) {
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
      <Route path="/profile" exact>
          {/* {isLogged ? ( */}
            <ProfilePage />
          {/* ) : (
            <Redirect to="/login" />
          )} */}
      </Route>

      <Route path="/modifyprofile" exact>
        <ProfilePageForm/>
      </Route>


      <Route path="/search" exact>
            <SearchPage />
      </Route>

      <Route path="/search/projects" exact>
            <SearchProjectsResults />
      </Route>

      <Route path="/search/projects/:id" component={SearchProjectsResult} />

      <Route path="/search/users" exact>
            <SearchUsersResults />
      </Route>

      <Route path="/search/users/:id" component={SearchUsersResult} />

      <Route path="/myParticipations" exact>
            <BoardPageParticipant />
      </Route>

      <Route path="/myProjects" exact>
            <BoardPageProjectBearer />
      </Route>

      <Route path="/myProjects/new" exact>
            <ProjectForm />
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
