/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";
import ProjectHeader from "./ProjectHeader";
import ProjectStatus from "./ProjectStatus";
// import ProjectCompetencies from "./ProjectCompetencies";
import ProjectDescription from "./ProjectDescription";
import ProjectNeeds from "./ProjectNeeds";
// import ProjectSpecificities from "./ProjectSpecificities";
import ProjectContact from "./ProjectContact";

// Icons
import { FiArrowLeftCircle } from "react-icons/fi";

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
  projectOwners,
  myUserId,
}) {
  useEffect(getProjects, []);
  useEffect(fetchProfileData, []);

  const projectOwner = projectOwners.find((searchedUser) => {
    return searchedUser.id === project.owner_id;
  });

  const participateToCurrentProject = myParticipatedProjects.find(
    (searchedParticipation) => {
      return searchedParticipation.id === idProject;
    }
  );

  const history = useHistory();

  const onClickParticipationButton = () => {
    clickParticipationButton(idProject, history);
  };

  const onClickUnparticipationButton = () => {
    clickUnparticipationButton(idProject, history);
  };

  // const onClickDeleteButton = () => {
  //   clickDeleteButton(idProject, history);
  // };

    // const onClickFinalizeButton = () => {
  //   onClickFinalizeButton(idProject, history);
  // };


  return (
    <div className="project__page">
      <div className="project__menu">
        <Menu />
      </div>

      <div className="project__subpage">
        <div className="header__user-search">
          {/* <Link to="/search/projects"> */}
          <p className="header__comeback">
            <FiArrowLeftCircle /> Revenir à la recherche
          </p>
          {/* </Link> */}
          <div className="header__user-icon">
            <HeaderConnected />
          </div>
        </div>

        <div className="project__component">
          <ProjectHeader
            name={project.name}
            pseudo={projectOwner.pseudo}
            icon={project.icon}
          />

          <ProjectStatus status={project.is_available} />

          {participateToCurrentProject ? (
            <ProjectContact
              firstname={projectOwner.firstname}
              lastname={projectOwner.lastname}
              email={projectOwner.email}
              phone={projectOwner.phone}
            />
          ) : null}

          {/* <ProjectCompetencies/> */}

          <div className="project__information element">
            <ProjectDescription description={project.description} />
            <ProjectNeeds needs={project.need_of_the_project} />
            {/* <ProjectSpecificities /> */}
          </div>

          <div className="project__buttons">
            {participateToCurrentProject && (
              <button
                className="project__button-unparticipate"
                onClick={onClickUnparticipationButton}
              >
                Je me retire du projet
              </button>
            )}

            {!participateToCurrentProject && project.is_available ? (
              <button
                className="project__button-participate"
                onClick={onClickParticipationButton}
              >
                Je participe !
              </button>
            ) : null}

            {projectOwner.id === myUserId? (
              <button
                className="project__button-delete"
                // onClick={onClickDeleteButton}
              >
                Supprimer ce projet
              </button>
            ) : null}

            {projectOwner.id === myUserId && project.is_available ? (
              <button
                className="project__button-finalize"
                // onClick={onClickFinalizeButton}
              >
                Clôturer ce projet
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchProjectsResult;
