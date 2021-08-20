/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Style
import "./style.scss";

// == Composant
function ProfileContact() {
  return (
    <div className="profile__contact-info element">
      <p className="profile__name"> Maxime Durand </p>
      <p className="profile__email"> maxime@gmail.com </p>
      <p className="profile__phone"> 07878677A0</p>
    </div>
  );
}

// == Export
export default ProfileContact;
