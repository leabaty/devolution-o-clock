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
        <div className="header__logo">
          <img className="header__logo__devolution" src="https://cdn.discordapp.com/attachments/874925609267118140/877480623034478622/test_Logo_-_transparent_white.png" alt="Logo Devolution" />
          <img className="header__logo__login" src="https://cdn.discordapp.com/attachments/874925609267118140/877480628810027028/test_login_-_transparent_white.png" alt="Logo login" />
        </div>
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


