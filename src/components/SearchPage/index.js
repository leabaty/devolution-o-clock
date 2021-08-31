/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";

// Icons
import { AiOutlineSearch } from "react-icons/ai";

// Style
import "./style.scss";

// == Composant
function SearchPage({
  changeInputProjectValue,
  changeInputUserValue,
  searchProjectSubmit,
  searchUserSubmit,
  searchAllProjectsSubmit,
  searchAllUsersSubmit,
}) {
  const onChangeInputProject = (event) => {
    changeInputProjectValue(event.target.value);
  };
  const onChangeInputUser = (event) => {
    changeInputUserValue(event.target.value);
  };
  const onSearchProjectSubmit = (event) => {
    event.preventDefault();
    searchProjectSubmit();
  };
  const onSearchUserSubmit = (event) => {
    event.preventDefault();
    searchUserSubmit();
  };
  const onSearchAllProjectsSubmit = () => {
    searchAllProjectsSubmit();
  };
  const onSearchAllUsersSubmit = () => {
    searchAllUsersSubmit();
  };

  return (
    <div className="search__page">
      <div className="search__menu">
        <Menu />
      </div>

      <div className="search__subpage">
        <div className="header__user">
          <HeaderConnected />
        </div>

        <p className="search__title">Recherche</p>

        <div className="search__component">
          <div className="search__project">
            <p className="search__subtitle">Je cherche un projet</p>
            <img
              className="search__icon"
              src="https://cdn.discordapp.com/attachments/874922784298528786/880454230056534077/recherche_par_projets.png"
              alt="Recherche par projet"
            />

            <form className="search__form">
              <input
                className="search__input"
                // placeholder={<AiOutlineSearch />}
                placeholder="nom de projet, d'association..."
                onChange={onChangeInputProject}
              />
              <Link to="">
                <button
                  className="search__button"
                  type="submit"
                  onClick={onSearchProjectSubmit}
                >
                  Rechercher un projet
                </button>
              </Link>
            </form>

            <Link to="/search/projects">
              <button
                className="search__button-all"
                onClick={onSearchAllProjectsSubmit}
              >
                Voir tous les projets
              </button>
            </Link>
          </div>

          <div className="search__user">
            <p className="search__subtitle">Je cherche un utilisateur</p>
            <img
              className="search__icon"
              src="https://cdn.discordapp.com/attachments/874922784298528786/880454233613271080/recherche_par_users.png"
              alt="Recherche par utilisateur"
            />

            <form className="search__form">
              <input
                className="search__input"
                placeholder="nom d'utilisateur, compétences, rôle..."
                onChange={onChangeInputUser}
              />
              <Link to="">
                <button className="search__button" onClick={onSearchUserSubmit}>
                  Rechercher un utilisateur
                </button>
              </Link>
            </form>

            <Link to="/search/users">
              <button
                className="search__button-all"
                onClick={onSearchAllUsersSubmit}
              >
                Voir tous les utilisateurs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchPage;
