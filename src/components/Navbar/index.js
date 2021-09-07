import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";
import { FaBars } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

import "./style.scss";

function Navbar({ logged, setLogout, cleanLs }) {
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
      console.log("toto");
      //mediaQuery.removeAddEventListener(handleMediaQueryChange);
    };
  }, [logged]);

  const onClickLogout = (e) => {
    setLogout();
    cleanLs();
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
      console.log("tototototottoto");
    }
  };

  if (!isLogged) {
    return (
      <header className="Header">

        <div className="Header__logo">
        <Link to="/">
            <img
              className="menu__logoicon"
              src="https://cdn.discordapp.com/attachments/874925609267118140/877480623034478622/test_Logo_-_transparent_white.png"
              alt="Logo Devolution"
            />
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
            <img
              className="menu__logoicon"
              src="https://cdn.discordapp.com/attachments/874925609267118140/877480623034478622/test_Logo_-_transparent_white.png"
              alt="Logo Devolution"
            />
        </div>

        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Header__nav--logged">
            <Link to="/searchProjects">
              <img
                className="menu__searchicon"
                src="https://cdn.discordapp.com/attachments/874922784298528786/877661543209242714/search_-_transparent_white.png"
                alt="Search Icon"
              />
            </Link>

            <Link to="/myProjects">
              <img
                className="menu__creatoricon"
                src="https://cdn.discordapp.com/attachments/874922784298528786/877661552369614858/idea_-_transparent_white.png"
                alt="Idea Icon"
              />
            </Link>

            <Link to="/myParticipations">
              <img
                className="menu__participanticon"
                src="https://cdn.discordapp.com/attachments/874922784298528786/877661549194530856/code_-_transparent_white.png"
                alt="Participant Icon"
              />
            </Link>

            <Link to="/profile">
              <AiOutlineUser
                size="40px"
                className="Header__logo__icon--logged"
              />
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
