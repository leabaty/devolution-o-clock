import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

function ProjectPageDisconnect(props) {
  return (
    <div className="projectDisconnect">
      <div className="projectDisconnect__header">
        <div className="header__logo">
          <img className="header__logo__devolution" src="https://cdn.discordapp.com/attachments/874925609267118140/877480623034478622/test_Logo_-_transparent_white.png" alt="Logo Devolution" />
          <img className="header__logo__login" src="https://cdn.discordapp.com/attachments/874925609267118140/877480628810027028/test_login_-_transparent_white.png" alt="Logo login" />
        </div>
        <h1 className="projectDisconnect__header__title">Titre du projet</h1>
        <span className="projectDisconnect__header__pseudo">Pseudo</span>
      </div>
    </div>
  )
}

ProjectPageDisconnect.propTypes = {

}

export default ProjectPageDisconnect


