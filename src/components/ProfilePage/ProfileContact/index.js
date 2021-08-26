/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Icons
import { AiOutlineUser } from 'react-icons/ai';
import { FiMail, FiPhone } from 'react-icons/fi';
// Style
// import "./style.scss";


// == Composant
function ProfileContact() {
  return (
    <div className="profile__contact-info element">
      <p className="profile__name"> <AiOutlineUser /> Maxime Durand </p>
      <p className="profile__email"> <FiMail /> maxime@gmail.com </p>
      <p className="profile__phone"> <FiPhone /> 07878677A0</p>
    </div>
  );
}

// == Export
export default ProfileContact;
