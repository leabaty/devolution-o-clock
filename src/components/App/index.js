// == Import npm
import React from 'react';

// == Import
import Home from 'src/components/Home';
import SearchPageDisconnect from 'src/components/SearchPageDisconnect'

// import Login from 'src/components/Login';
import ProfilePage from 'src/components/ProfilePage';


import DataProjects from 'src/data/projects';
import './style.scss';

// == Composant

function App (props) {
  return (
    <div className="app">
    {/* <Home projects={DataProjects}/> */}
    <SearchPageDisconnect projects={DataProjects}/>
    {/* <Login/> */}
    < ProfilePage/>

  </div>
  )
}

// == Export
export default App;