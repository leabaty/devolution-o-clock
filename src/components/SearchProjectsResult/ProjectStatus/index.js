// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// == Composant
function ProjectStatus({ status }) {
  return (
    <div className="project__status element">
      {status === true ? <p className="project__status-indicator"> Projet ouvert aux participations</p> : <p className="project__status-indicator">Projet fermé aux participations</p> }
    </div>
  );
}

// == Export
export default ProjectStatus;
