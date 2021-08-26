/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Style
// import "./style.scss";

// == Composant
function ProfileContact({ userData }) {
  return (
    <div className="profile__contact-info element">
      <p className="profile__name"> {userData.firstname} {userData.lastname} </p>
      <p className="profile__email"> {userData.email} </p>
      <p className="profile__phone"> {userData.phone} </p>
    </div>
  );
}

// == Export
export default ProfileContact;
