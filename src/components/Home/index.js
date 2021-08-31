import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from 'src/components/Header';
import CardProject from 'src/components/CardProject';


import './style.scss'

function Home({projects, lastProjectsLoading}) {
  useEffect(lastProjectsLoading, []);
  console.log(projects)
  
  return (
    <div className="home">
      <Header />
      <h2 className="home__title">Les derniers projets</h2>
      <div className="home__cards">
        {projects.map((project) => (
          <CardProject
            key={project.id}
            {...project}
          />
        ))}
      </div>
      <Link to='/searchProjects'>
        <button className="home__button">Voir plus de projets</button>
      </Link>
    </div>
  )
}

Home.propTypes = {

}

export default Home

