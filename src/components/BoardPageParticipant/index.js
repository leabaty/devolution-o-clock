/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";
import CardProject from "src/components/CardProject";

// Style
import "./style.scss";

// == Composant
function BoardPageParticipant() {
  return (
    <div className="board__page">
      <div className="board__menu">
        <Menu />
      </div>

      <div className="board__subpage">
        <div className="header__user">
          <HeaderConnected />
        </div>

        <p className="board__title">Espace Participant</p>

        <div className="board__component">
          <div className="board__running-projects">
            <p className="board__subtitle">Mes projets en cours</p>
            <CardProject />
          </div>

          <div className="board__finalized-projects">
            <p className="board__subtitle">Mes projets clôturés</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default BoardPageParticipant;
