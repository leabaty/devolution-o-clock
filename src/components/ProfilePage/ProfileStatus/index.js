/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// Style
// import './style.scss';

// == Composant
<<<<<<< HEAD
function ProfileStatus({ userData }) {
  const { user_status } = userData;
  return (
      <div className="profile__status element">
        <p className="profile__status-indicator">{user_status}</p>
=======
function ProfileStatus( {userData}) {
  return (
      <div className="profile__status element">
        <p className="profile__status-indicator">{userData.user_status}</p>
>>>>>>> main
      </div>
  );
}

// == Export
export default ProfileStatus;
