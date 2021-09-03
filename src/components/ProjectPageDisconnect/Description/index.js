import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Description({ description }) {
  return (
    <div className="functionalities">
      <h2 className="functionalities__title">
        Description
      </h2>
      <p className="functionalities__text">
        {description}
      </p>
    </div>
  )
}

Description.propTypes = {

}

export default Description

