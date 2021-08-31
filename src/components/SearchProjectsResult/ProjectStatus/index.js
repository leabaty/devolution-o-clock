// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// == Composant
function ProjectStatus({ status }) {
  return (
    <div className="project__status element">
      <p className="project__status-indicator">{status}</p>
    </div>
  );
}

// == Export
export default ProjectStatus;
