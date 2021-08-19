/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// Composants
import Menu from 'src/components/Menu';

// Style
import './style.scss';

// == Composant
function ProfilePage() {
  return (
    <div className="profile__page">

    <div className="profile__menu">
        <Menu/>
    </div>

    <div className="profile__component">

      <div className="profile__greeting">

        <div>
        <h1 className="profile__title">Hello, Max!</h1>
        <h2 className="profile__undertitle">Undertitle</h2>
        </div>

        <img className="profile__picture" src="" alt="Profile picture"/>
      </div>

      <div className="profile__status element">
        <p className="profile__status-indicator">Disponible</p>
      </div>

      <div className="profile__contact-info element">
        <p className="profile__name"> Maxime Durand </p>
        <p className="profile__email"> maxime@gmail.com </p>
        <p className="profile__phone"> 07878677A0</p>
      </div>

      <div className="profile__city-links element">
        <p className="profile__city-name"> Paris</p>
        <a className="profile__dribbble" alt="Dribble Link">
          <img className="profile__dribble-icon" src="" alt="Dribbble icon"/>
        </a>
        <a className="profile__linkedin" alt="LinkedIn Link">
          <img className="profile__linkedin-icon" src="" alt="LinkedIn icon"/>
        </a>
        <a className="profile__github" alt="GitHub Link">
          <img className="profile__github-icon" src="" alt="GitHub icon"/>
        </a>
      </div>

      <div className="profile__competencies element">
        <h3 className="profile__category-title">Mes compétences</h3>
      </div>

      <div className="profile__bio element">
        <h3 className="profile__category-title">Ma bio</h3>
        <p className="profile__description">Nia nia nia</p>
      </div>

      <div className="profile__portfolio element">
        <a className="profile__portfolio-link" alt="Portfolio Link">Nia nia nia</a>
      </div>

    </div>
    </div>
  );
}

// == Export
export default ProfilePage;