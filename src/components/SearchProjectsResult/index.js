/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";
import ProjectHeader from "./ProjectHeader";
import ProjectStatus from "./ProjectStatus";
// import ProjectCompetencies from "./ProjectCompetencies";
import ProjectDescription from "./ProjectDescription";
import ProjectNeeds from "./ProjectNeeds";
// import ProjectSpecificities from "./ProjectSpecificities";

// Icons
import { FiArrowLeftCircle } from "react-icons/fi";

// Style
import "./style.scss";

// == Composant
function SearchProjectsResult({ project }) {
  console.log(project);
  return (
    <div className="project__page">
      <div className="project__menu">
        <Menu />
      </div>

      <div className="project__subpage">
      <div className="header__user-search">
          <p className="header__comeback">
            <FiArrowLeftCircle /> Revenir à la recherche
          </p>
          <div className="header__user-icon"><HeaderConnected /></div>
        </div>

        <div className="project__component">
          <ProjectHeader 
          name={project.name} 
          pseudo={project.pseudo} />

          <ProjectStatus status={project.project_status} />
          {/* <ProjectCompetencies/> */}

          <div className="project__information element">
            <ProjectDescription description={project.description}/>
            <ProjectNeeds needs={project.need_of_the_project}/>
            {/* <ProjectSpecificities /> */}
          </div>

          <button className="project__button">Je me propose !</button>
        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchProjectsResult;
