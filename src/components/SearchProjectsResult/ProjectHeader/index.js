// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// == Composant
function ProjectHeader({ name, pseudo }) {
  return (
    <div className="project__header">
      <h1 className="project__title">{name}</h1>
      {/* <p>
        par <a className="project__bearer">{pseudo}</a>
      </p> */}
    </div>
  );
}

// == Export
export default ProjectHeader;
