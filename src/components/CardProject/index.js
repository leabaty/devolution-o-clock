import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function CardProject({name, author, icon, description}) {
  return (
    <div className="cardProject">
      <p className="cardProject__title">{name}</p>
      {/* <a href="" className="cardProject__pseudo">{author}</a> */}
      <img className="cardProject__image" src={icon} alt="Image projet" />
      <div className="cardProject__description">
        <p>{description}</p>
      </div>
    </div>
  )
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CardProject;

