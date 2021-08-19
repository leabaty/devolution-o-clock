// == Import npm
import React from 'react';

// == Import
import Home from 'src/components/Home';
import SearchPageDisconnect from 'src/components/SearchPageDisconnect';
import ProjectPageDisconnect from 'src/components/ProjectPageDisconnect';
import DataProjects from 'src/data/projects';
import './style.scss';

// == Composant

function App (props) {
  return (
    <div className="app">
    {/* <Home projects={DataProjects}/> */}
    {/* <SearchPageDisconnect projects={DataProjects}/> */}
    <ProjectPageDisconnect />
  </div>
  )
}

// == Export
export default App;
