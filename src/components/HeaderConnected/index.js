// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Icons
import { AiOutlineUser } from "react-icons/ai";

// Style
import "./style.scss";

// == Composant
const HeaderConnected = ({}) => (
  <div className="header-connected__user-logo">
    <AiOutlineUser size="60px" />
  </div>
);

// == Export
export default HeaderConnected;
