/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// Style
import './style.scss';

// == Composant
function ProfileStatus() {
  return (
      <div className="profile__status element">
        <p className="profile__status-indicator">Disponible</p>
      </div>
  );
}

// == Export
export default ProfileStatus;
