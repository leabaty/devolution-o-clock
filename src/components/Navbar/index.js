import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";
import { FaHands, FaBars, FaSearch, FaRegLightbulb, FaUserAlt } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';


import "./style.scss";

function Navbar({ logged, setLogout, cleanLs, cleanLogin }) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (logged) setIsLogged(logged);
    const mediaQuery = window.matchMedia("(max-width: 780px)");
    mediaQuery.addEventListener("change", () =>
      handleMediaQueryChange(mediaQuery)
    );

    return () => {
      console.log("Check Navbar");
      //mediaQuery.removeAddEventListener(handleMediaQueryChange);
    };
  }, [logged]);

  const onClickLogout = (e) => {
    setLogout();
    cleanLs();
    cleanLogin();
    setIsLogged(false);
  };

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = (e) => {
    if (setIsSmallScreen) {
      setNavVisibility(!isNavVisible);
    } else {
      console.log("La Navbar est sur un grand écran");
    }
  };

  if (!isLogged) {
    return (
      <header className="Header">
        <div className="Header__logo">
          <Link to="/">
            <FaHands className="Header__logo__icon--logged" />
          </Link>
        </div>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <>
            <nav className="Header__nav">
              <Link to="/">Home</Link>
              <Link to="/">Oclock</Link>
              <Link to="/">About</Link>
              <div className="Header__login">
                <Link to="/login">
                  <button>login</button>
                </Link>
              </div>
            </nav>
          </>
        </CSSTransition>
        <button onClick={toggleNav} className="Header__burger">
          <FaBars />
        </button>
      </header>
    );
  } else {
    return (
      <header className="Header--logged">
        <div className="Header__logo--logged">
          <Link to="/">
            <FaHands className="Header__logo__icon--logged" />
          </Link>
        </div>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Header__nav--logged">
            <Link to="/searchProjects">
              <FaSearch className="Header__logo__icon--logged" />
            </Link>
            <Link to="/myProjects">
              <FaRegLightbulb className="Header__logo__icon--logged" />
            </Link>
            <Link to="/myParticipations">
              <MdWeb className="Header__logo__icon--logged" />
            </Link>
            <Link to="/profile">
              <FaUserAlt className="Header__logo__icon--logged" />
            </Link>
            <div className="Header__logout--logged">
              <Link to="/">
                <button onClick={onClickLogout}>Déconnexion</button>
              </Link>
            </div>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Header__burger">
          <FaBars />
        </button>
      </header>
    );
  }
}

// Navbar.propTypes = {
//   isLogged: PropTypes.bool.isRequired,
// };

// Navbar.defaultProps = {
//   isLogged: false,
// };

export default Navbar;
