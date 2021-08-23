/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Style
import "./style.scss";

// == Composant
function ProfileCompetencies() {
  return (
    <div className="profile__competencies">
      <h3 className="profile__category-title">Mes compétences</h3>
      <ul className="profile__competencies-list">
            <li>Compentency 1</li>
            <li>Competency 2</li>
      </ul>
    </div>
  );
}

// == Export
export default ProfileCompetencies;
