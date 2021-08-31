import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ReactLogo from './logo.svg';
import './style.scss'

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">Devolution</h1>
      <p className="header__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sit illo expedita labore omnis aliquam sequi enim magni ratione laboriosam ab ullam est, quaerat eius, aut corporis incidunt blanditiis dignissimos.</p>
      <input className="header__input" type="text" placeholder="Recherche..."  />
    </header>
  )
}

Header.propTypes = {

}


export default Header
