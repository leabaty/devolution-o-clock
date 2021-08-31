import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { FaHands, FaBars, FaSearch, FaRegLightbulb } from 'react-icons/fa';
import "./style.scss";
import { Link } from "react-router-dom";

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isLogged, setIsLogged] = useState(true);

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
                    <Link href="/"><FaHands className="Header__logo__icon--logged" /></Link>
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
                            <button>login</button>
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
                    <Link href="/"><FaHands className="Header__logo__icon--logged" /></Link>
                </div>
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                <nav className="Header__nav--logged">
                        <Link to="/"><FaSearch className="Header__logo__icon--logged" /></Link>
                        <Link to="/"><FaRegLightbulb className="Header__logo__icon--logged" /></Link>
                        <Link to="/"><FaRegLightbulb className="Header__logo__icon--logged" /></Link>
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
