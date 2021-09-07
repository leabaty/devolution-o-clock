import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import HomeDevolution from "src/components/HomeDevolution";

import "./style.scss";

function Error404({}) {
  return (
    <header className="error404">
      <h1 className="error404__title">Oups !</h1>
      <img className="error404__image" src="https://i.ibb.co/f9NY5FJ/404.gif" alt="404" />
      <div className="error404__description">
        <p>
          La page que vous recherchez semble introuvable (code d'erreur : 404).
        </p>
        <p>Cliquez sur le menu pour retrouver votre chemin !</p>
      </div>
    </header>
  );
}

Error404.propTypes = {};

export default Error404;
