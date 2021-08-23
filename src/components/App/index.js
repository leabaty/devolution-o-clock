// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Home from 'src/containers/Home';
import SearchPageDisconnect from 'src/components/SearchPageDisconnect'
import Login from 'src/containers/Login';
import ProfilePage from 'src/components/ProfilePage';


import DataProjects from 'src/data/projects';
import './style.scss';

// == Composant

function App (props) {
  return (
    <div className="app">
    <Switch>
      <Route path="/" exact>
        <Home projects={DataProjects}/>
      </Route>
      <Route path="/searchProjects" exact>
        <SearchPageDisconnect projects={DataProjects}/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/profile" exact>
        < ProfilePage/>
      </Route>
    </Switch>

  </div>
  )
}

// == Export
export default App;
