/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";
import CardProject from "src/components/CardProject";

// Icons
import { FiSearch } from "react-icons/fi";

// Style
import "./style.scss";

// == Composant
function SearchProjectsResults() {
  return (
    <div className="search__page">
      <div className="search__menu">
        <Menu />
      </div>

      <div className="search__subpage">

        <div className="header__user">
          <HeaderConnected />
        </div>

        <div className="search-details__container">

            <form className="search-details__form">
              <input
                className="search-details__input"
              />
              <button className="search-details__button" type="submit">
                <FiSearch size="25px"/>
              </button>
            </form>

            <p className="search-details__number-results"> 5 résultats </p>

            <div className="search-details__results">
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            </div>

        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchProjectsResults;