// == Import npm
import React from 'react';

// == Import
import Home from 'src/components/Home';

import DataProjects from 'src/data/projects';
import './style.scss';

// == Composant

function App (props) {
  return (
    <div className="app">
    <Home 
    projects={DataProjects}
    />
  </div>
  )
}

// == Export
export default App;
