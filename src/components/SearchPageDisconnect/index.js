import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CardProject from "src/components/CardProject";
import Footer from "src/components/Footer";

import "./style.scss";

function SearchPageDisconnect({
  changeInputSearch,
  submitSearchInput,
  projects,
}) {
  const onChangeInputSearch = (event) => {
    changeInputSearch(event.target.value);
  };

  const onSubmitSearchInput = (event) => {
    event.preventDefault();
    submitSearchInput();
  };
  return (
    <div className="searchDisconnect">
      <div className="searchDisconnect__header">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logo__devolution"
              src="https://cdn.discordapp.com/attachments/874925609267118140/877480623034478622/test_Logo_-_transparent_white.png"
              alt="Logo Devolution"
            />
          </Link>
          <Link to="/login">
            <img
              className="header__logo__login"
              src="https://cdn.discordapp.com/attachments/874925609267118140/877480628810027028/test_login_-_transparent_white.png"
              alt="Logo login"
            />
          </Link>
        </div>
        <form onSubmit={onSubmitSearchInput}>
          <input
            type="text"
            placeholder="Recherche..."
            className="header__input"
            onChange={onChangeInputSearch}
          />
        </form>
      </div>
      <h1 className="searchDisconnect__title">Résultats de la recherche</h1>
      <span className="searchDisconnect__resultNumber">{projects.length} résultat(s)</span>
      <div className="home__cards">
        {projects.map((project) => (
          <Link key={project.id} to={`/search/projects/${project.id}`}>
            <CardProject key={project.id} {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
}

SearchPageDisconnect.propTypes = {};

export default SearchPageDisconnect;
