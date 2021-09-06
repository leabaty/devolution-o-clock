/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect }from "react";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';

// Composants
import ProjectHeader from "./ProjectHeader";
import ProjectStatus from "./ProjectStatus";
// import ProjectCompetencies from "./ProjectCompetencies";
import ProjectDescription from "./ProjectDescription";
import ProjectNeeds from "./ProjectNeeds";
// import ProjectSpecificities from "./ProjectSpecificities";

// Icons

// Style
import "./style.scss";

// == Composant
function SearchProjectsResult({
  clickParticipationButton,
  clickUnparticipationButton,
  project,
  idProject,
  myParticipatedProjects,
  fetchProfileData,
  getProjects,
  logged }) {

  useEffect(getProjects, []);
  useEffect(fetchProfileData, []);


  const currentProject = myParticipatedProjects.find((searchedParticipation) => {
    return searchedParticipation.id === idProject;
  });

  const history = useHistory();

  const onClickParticipationButton = () => {
    clickParticipationButton(idProject, history);
  };

  const onClickUnparticipationButton = () => {
    clickUnparticipationButton(idProject, history);
  };

  return (
    <div className={`project__page ${logged ? 'islog' : ''}`}>
      <div className="project__subpage">

        <div className="project__component toto">
          <ProjectHeader name={project.name} pseudo={project.pseudo} />

          <ProjectStatus status={project.is_available} />
          {/* <ProjectCompetencies/> */}

          <div className="project__information element">
            <ProjectDescription description={project.description} />
            <ProjectNeeds needs={project.need_of_the_project} />
            {/* <ProjectSpecificities /> */}
          </div>

            {currentProject && (
              <button className="project__button-unparticipate" onClick={onClickUnparticipationButton}>Je me retire du projet</button>
            )}

            {!currentProject && project.is_available ? (
              <button className="project__button-participate" onClick={onClickParticipationButton}>Je participe !</button>

            ) : (
              null
            )}

        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchProjectsResult;
