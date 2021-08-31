// == Import : npm
import React from "react";
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Icons
import { AiOutlineUser } from "react-icons/ai";

// Style
import "./style.scss";

// == Composant
const HeaderConnected = ({}) => (
  <Link to='/profile'>
    <div className="header-connected__user-logo">
      <AiOutlineUser size="60px" />
    </div>
  </Link>
);

// == Export
export default HeaderConnected;
