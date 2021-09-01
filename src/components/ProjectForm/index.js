/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";

// Icons
import { FiArrowLeftCircle } from "react-icons/fi";

// Style
import "./style.scss";

// == Composant
function SearchProjectsResult({
  projectSubmitForm,
  changeProjectTitleValue,
  changeProjectStatusValue,
  changeProjectStartDateValue,
  changeProjectDescriptionValue,
  changeProjectNeedsValue,
  // changeProjectSpecificitiesValue,
  // changeProjectImageValue,
  projectTitle,
  projectStatus,
  projectStartDate,
  projectDescription,
  projectNeeds,
  // projectSpecificities,
  // projectImage,
}) {

  const history = useHistory();

  const onProjectSubmit = (event) => {
    event.preventDefault();
    projectSubmitForm(history);
  };

  const onChangeProjectTitle = (event) => {
    changeProjectTitleValue(event.target.value);
  };

  const onChangeProjectStatus = (event) => {
    changeProjectStatusValue(event.target.value);
  };

  const onChangeProjectStartDate = (event) => {
    changeProjectStartDateValue(event.target.value);
  };

  const onChangeProjectDescription = (event) => {
    changeProjectDescriptionValue(event.target.value);
  };

  const onChangeProjectNeeds = (event) => {
    changeProjectNeedsValue(event.target.value);
  };

  // const onChangeProjectSpecificities = (event) => {
  //   changeProjectSpecificitiesValue(event.target.value);
  // };

  // const onChangeProjectImage = (event) => {
  //   changeProjectImageValue(event.target.value);
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
              <option value={true} >Ouvert aux participants</option>
              <option value={false}>Fermé aux participants</option>
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
                <p className="project-form__guidelines">La description de votre projet : Qui êtes-vous ? Quel est votre vision ? Quel est le but de votre projet, à quels besoins répond-il ? ...</p>
                <textarea
                  className="project-form__description"
                  value={projectDescription}
                  onChange={onChangeProjectDescription}
                  placeholder="Entrez votre description ici... "
                />
              </div>

              <div className="project__needs">
                <h3 className="project__subtitle">
                  Fonctionnalités et besoins
                </h3>
                <p className="project-form__guidelines">Quelles sont les pages web dont vous avez besoin ? Savez-vous déjà quelles technologies vous souhaitez utiliser ? Quelles sont les fonctionnalités attendues ? Avez-vous déjà des participants au projet, et si oui, qui sont-ils ? Recherchez-vous un profil en particulier ?</p>
                <textarea
                  className="project-form__needs"
                  value={projectNeeds}
                  onChange={onChangeProjectNeeds}
                  placeholder="Entrez vos besoins et fonctionnalités souhaitées ici..."
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
