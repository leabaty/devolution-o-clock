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
            <img className="search__icon" src="https://cdn.discordapp.com/attachments/874922784298528786/880454230056534077/recherche_par_projets.png" alt="Recherche par projet" />

            <form className="search__form">
              <input
                className="search__input"
                // placeholder={<AiOutlineSearch />}
                placeholder="nom de projet, d'association..."
              />
              <button className="search__button" type="submit">
                Rechercher un projet
              </button>
            </form>
          </div>

          <div className="search__user">
            <p className="search__subtitle">Je cherche un utilisateur</p>
            <img className="search__icon" src="https://cdn.discordapp.com/attachments/874922784298528786/880454233613271080/recherche_par_users.png" alt="Recherche par utilisateur" />

            <form className="search__form">
              <input
                className="search__input"
                placeholder="nom d'utilisateur, technologies, rôle..."
              />
              <button className="search__button" type="submit">
                Rechercher un utilisateur
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
