/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";

// Icons
import { AiOutlineSearch } from "react-icons/ai";

// Style
import "./style.scss";

// == Composant
function SearchPage() {
  return (
    <div className="search__page">
      <div className="search__menu">
        <Menu />
      </div>

      <div className="search__subpage">
        <div className="profile__user-icon">
          <HeaderConnected />
        </div>

        <p className="search__title">Recherche</p>

        <div className="search__component">

          <div className="search__project">
            <p className="search__subtitle">Je cherche un projet</p>

            <form className="search__form">
              <input
                className="search__input"
                placeholder={<AiOutlineSearch />}
              />
              <button className="search__button" type="submit">
                Rechercher un projet
              </button>
            </form>
          </div>

          <div className="search__user">
            <p className="search__subtitle">Je cherche un utilisateur</p>
            <form className="search__form">
              <input
                className="search__input"
                placeholder={<AiOutlineSearch />}
              />
              <button className="search__button" type="submit">
                Rechercher un projet
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchPage;
