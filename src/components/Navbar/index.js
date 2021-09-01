import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FaHands, FaBars, FaSearch, FaRegLightbulb, FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import "./style.scss";

function Navbar( /*{ isLogged } */) {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 780px)");
        mediaQuery.addEventListener("change", () => handleMediaQueryChange(mediaQuery));
        return () => {
            mediaQuery.removeAddEventListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = (e) => {
        if (setIsSmallScreen) setNavVisibility(!isNavVisible);
    };
    if (!isLogged) {
        return (
            <header className="Header">
                <div className="Header__logo">
                    <Link to="/"><FaHands className="Header__logo__icon--logged" /></Link>
                </div>
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={ 350 }
                    classNames="NavAnimation"
                    unmountOnExit
                >
                <>
                    <nav className="Header__nav">
                        <Link to="/">Home</Link>
                        <Link to="/">Oclock</Link>
                        <Link to="/">About</Link>
                        <div className="Header__login">
                            <Link to="/login"><button>login</button></Link>
                        </div>
                    </nav>
                </>
                </CSSTransition>
                <button onClick={toggleNav} className="Header__burger">
                    <FaBars/>
                </button>
            </header>
        );
    } else {
        return (
            <header className="Header--logged">
                <div className="Header__logo--logged">
                    <Link to="/"><FaHands className="Header__logo__icon--logged" /></Link>
                </div>
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                <nav className="Header__nav--logged">
                    <Link to="/searchProjects"><FaSearch className="Header__logo__icon--logged" /></Link>
                    <Link to="/"><FaRegLightbulb className="Header__logo__icon--logged" /></Link>
                    <Link to="/"><FaRegLightbulb className="Header__logo__icon--logged" /></Link>
                    <Link to="/"><FaUserAlt className="Header__logo__icon--logged" /></Link>
                    <div className="Header__logout--logged">
                        <button>logout</button>
                    </div>
                </nav>
                </CSSTransition>
                <button onClick={toggleNav} className="Header__burger">
                    <FaBars/>
                </button>
            </header>
        );
    }
}


Navbar.propTypes = {
    isLogged: PropTypes.bool.isRequired,
};

Navbar.defaultProps = {
    isLogged: false,
};

export default Navbar;
