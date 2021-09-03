import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss'

function HeaderHome({ changeInputHome, submitHomeInput }) {
  const onChangeInputHome = (event) => {
    changeInputHome(event.target.value);
  };

  const onSubmitHomeInput = (event) => {
    event.preventDefault()
    submitHomeInput();
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo__devolution" src="https://cdn.discordapp.com/attachments/874925609267118140/877480623034478622/test_Logo_-_transparent_white.png" alt="Logo Devolution" />
        <Link to="/login">
          <img className="header__logo__login" src="https://cdn.discordapp.com/attachments/874925609267118140/877480628810027028/test_login_-_transparent_white.png" alt="Logo login" />
        </Link>
      </div>
      <h1 className="header__title">Devolution</h1>
      <p className="header__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sit illo expedita labore omnis aliquam sequi enim magni ratione laboriosam ab ullam est, quaerat eius, aut corporis incidunt blanditiis dignissimos.</p>
    </div>
  )
}

HeaderHome.propTypes = {

}


export default HeaderHome

