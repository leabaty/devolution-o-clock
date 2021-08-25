import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Description(props) {
  return (
    <div className="functionalities">
      <h2 className="functionalities__title">
        Description
      </h2>
      <p className="functionalities__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum placeat quam eveniet culpa maiores deleniti eos dolorem natus non modi odit voluptatum nam nobis tenetur aperiam eius ipsum, voluptates explicabo!
      </p>
    </div>
  )
}

Description.propTypes = {

}

export default Description

