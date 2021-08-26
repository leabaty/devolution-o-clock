/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Style
// import "./style.scss";

// == Composant
function ProfileCityLinks({ userData }) {
  return (
    <div className="profile__city-links element">
      <p className="profile__city-name"> {userData.city} </p>
      <a className="profile__dribbble" alt="Dribble Link">
        <img className="profile__twitter-icon" src="" alt="Twitter icon" />
        {userData.twitter}
      </a>
      <a className="profile__linkedin" alt="LinkedIn Link">
        <img className="profile__linkedin-icon" src="" alt="LinkedIn icon" />
        {userData.linkedin}
      </a>
      <a className="profile__github" alt="GitHub Link">
        <img className="profile__github-icon" src="" alt="GitHub icon" />
        {userData.github}
      </a>
    </div>
  );
}

// == Export
export default ProfileCityLinks;
