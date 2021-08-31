/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// Style
// import './style.scss';

// == Composant
function ProfileStatus({status}) {
  return (
      <div className="profile__status element">
        <p className="profile__status-indicator">{status}</p>
      </div>
  );
}

// == Export
export default ProfileStatus;
