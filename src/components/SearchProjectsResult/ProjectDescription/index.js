// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// == Composant
function ProjectDescription({ project_description }) {
  return (
    <div className="project__description">
      <h3 className="project__subtitle">Description</h3>
      <h3 className="project__text">{project_description}</h3>
    </div>
  );
}

// == Export
export default ProjectDescription;
