/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";
import CardProject from "src/components/CardProject";

// Icons
import { HiOutlineLightBulb } from "react-icons/hi";

// Style
import "./style.scss";

// == Composant
function BoardPageProjectBearer({ fetchProfileData }) {
  useEffect(fetchProfileData, []);

  var infoProfile = JSON.parse(localStorage.getItem("dataProfile"));
  const myProjects = infoProfile.findProject;

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
          <Link to="/myProjects/new">
            <div className="board__new-project">
              <div className="board__new-project-card">
                <p>
                  {" "}
                  <HiOutlineLightBulb size="1.2em" /> Déposer un nouveau projet
                </p>
              </div>
            </div>
          </Link>

          <div className="board__component">
            <div className="board__running-projects">
              <p className="board__subtitle">Mes projets en cours</p>
              {myProjects.length === 0
                ? "Aucun projet en cours"
                : myProjects.map((project) => (
                    <CardProject key={project.id} {...project} />
                  ))}
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
