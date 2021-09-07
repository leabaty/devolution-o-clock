/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// Style
// import './style.scss';

// == Composant
function ProfileStatus({ userData }) {
  const { user_status } = userData;
  return (
      <div className="profile__status element">
      <p className="profile__status-indicator">{ user_status ? user_status : 'Bientôt disponible' }</p>
      </div>
  );
}

// == Export
export default ProfileStatus;
