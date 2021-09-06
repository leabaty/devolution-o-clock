import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Description from 'src/components/ProjectPageDisconnect/Description';
import Functionalities from 'src/components/ProjectPageDisconnect/Functionalities';
import Footer from 'src/components/Footer';

import './style.scss'

function ProjectPageDisconnect({ project }) {

  return (
    <div className="projectDisconnect">
      <div className="projectDisconnect__header">
        <h1 className="projectDisconnect__header__title">{project.name}</h1>
        {/* <span className="projectDisconnect__header__pseudo">Pseudo</span> */}
      </div>
      <div className="projectDisconnect__main">
        <Link to='/searchProjects'>
          <div className="projectDisconnect__main__return">
            <div className="projectDisconnect__main__return__arrow">
              ➞
            </div>
            <div className="projectDisconnect__main__return__text">
              Revenir à la recherche
            </div>
          </div>
        </Link>
        <div className="projectDisconnect__main__informations">
          <Description description={project.description}/>
          <Functionalities functionalities={project.need_of_the_project}/>
        </div>
        <Link to='/login'>
        <button className="projectDisconnect__main__button">Plus de détails</button>
        </Link>
      </div>
        <Footer />
    </div>
  )
}

ProjectPageDisconnect.propTypes = {

}

export default ProjectPageDisconnect
