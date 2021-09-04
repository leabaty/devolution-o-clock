import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

function Functionalities({ functionalities }) {
  return (
    <div className="functionalities">
      <h2 className="functionalities__title">
        Fonctionnalités et pages
      </h2>
      <p className="functionalities__text">
      { functionalities }
      </p>
    </div>
  )
}

Functionalities.propTypes = {

}

export default Functionalities

