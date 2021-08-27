/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";
import CardProject from "src/components/CardProject";

// Icons
import { HiOutlineLightBulb } from "react-icons/hi";

// Style
import "./style.scss";

// == Composant
function BoardPageProjectBearer() {
  return (
    <div className="board__page">
      <div className="board__menu">
        <Menu />
      </div>

      <div className="board__subpage">
        <div className="header__user">
          <HeaderConnected />
        </div>

        <p className="board__title">Espace Porteur de projet</p>

        <div className="board__my-projects">
          <div className="board__new-project">
            <div className="board__new-project-card">
              <p>
                {" "}
                <HiOutlineLightBulb size="1.2em"/> Déposer un nouveau projet
              </p>
            </div>
          </div>

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
    </div>
  );
}

// == Export
export default BoardPageProjectBearer;