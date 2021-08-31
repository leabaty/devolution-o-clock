/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";

// Icons
import { FiArrowLeftCircle } from "react-icons/fi";

// Style
import "./style.scss";

// == Composant
function SearchProjectsResult({
  onProjectSubmitForm,
  onChangeProjectTitleValue,
  onChangeProjectStatusValue,
  onChangeProjectStartDateValue,
  onChangeProjectDescriptionValue,
  onChangeProjectNeedsValue,
  // onChangeProjectSpecificitiesValue,
  // onChangeProjectImageValue,
  projectTitle,
  projectStatus,
  projectStartDate,
  projectDescription,
  projectNeeds,
  // projectSpecificities,
  // projectImage,
}) {
  const onProjectSubmit = (event) => {
    event.preventDefault();
    onProjectSubmitForm();
  };

  const onChangeProjectTitle = (event) => {
    onChangeProjectTitleValue(event.target.value);
  };

  const onChangeProjectStatus = (event) => {
    onChangeProjectStatusValue(event.target.value);
  };

  const onChangeProjectStartDate = (event) => {
    onChangeProjectStartDateValue(event.target.value);
  };

  const onChangeProjectDescription = (event) => {
    onChangeProjectDescriptionValue(event.target.value);
  };

  const onChangeProjectNeeds = (event) => {
    onChangeProjectNeedsValue(event.target.value);
  };

  // const onChangeProjectSpecificities = (event) => {
  //   onChangeProjectSpecificitiesValue(event.target.value);
  // };

  // const onChangeProjectImage = (event) => {
  //   onChangeProjectImageValue(event.target.value);
  // };

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
          <HeaderConnected />
        </div>

        <div className="project__component">
          <form className="signup_form" onSubmit={onProjectSubmit}>
            <div className="project__header">
              <input
                className="project-form__title"
                value={projectTitle}
                onChange={onChangeProjectTitle}
                placeholder="Titre du projet"
              />
              <p>
                par <a className="project__bearer">Pseudo</a>
              </p>
            </div>

            <select
              className="project-form__status-indicator"
              value={projectStatus}
              onChange={onChangeProjectStatus}
              id="status"
            >
              <option value="Ouvert">Ouvert aux participants</option>
              <option value="Fermé">Fermé aux participants</option>
            </select>

            <div className="project__start-date element">
              <h3 className="project__subtitle">Date de début souhaitée</h3>
              <input
                className="project-form__start-date"
                type="date"
                id="project-start-date"
                name="project-start-date"
                value={projectStartDate}
                onChange={onChangeProjectStartDate}
              />
            </div>

            <div className="project__information element">
              <div className="project__description">
                <h3 className="project__subtitle">Description</h3>
                <textarea
                  className="project-form__description"
                  value={projectDescription}
                  onChange={onChangeProjectDescription}
                  placeholder="La description de votre projet : Qui êtes-vous ? Quel est votre vision ? Quel est le but de votre projet, à quels besoins répond-il ? ... "
                />
              </div>

              <div className="project__needs">
                <h3 className="project__subtitle">
                  Fonctionnalités et besoins
                </h3>
                <textarea
                  className="project-form__needs"
                  value={projectNeeds}
                  onChange={onChangeProjectNeeds}
                  placeholder="Quelles sont les pages web dont vous avez besoin ? Savez-vous déjà quelles technologies vous souhaitez utiliser ? Quelles sont les fonctionnalités attendues ? Avez-vous déjà des participants au projet, et si oui, qui sont-ils ? Recherchez-vous un profil en particulier ? "
                />
              </div>

              {/* <div className="project__specificities">
            <h3 className="project__subtitle">Spécificités du projet</h3>
            <textarea
            className="project-form__specificities"
            value={projectSpecificities}
            onChange={onChangeProjectSpecificities}
            placeholder="Une petite bio : Votre parcours, ce qui vous motive, vos centres d'intérêt, ce que vous souhaitez apprendre..."
          />
            </div> */}
            </div>

            <button className="project__button" type="submit">
              Proposer mon projet !
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

SearchProjectsResult.propTypes = {};

// == Export
export default SearchProjectsResult;
