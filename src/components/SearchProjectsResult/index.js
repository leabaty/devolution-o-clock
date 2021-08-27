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
function SearchProjectsResult() {
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
          <div className="project__header">
            <h1 className="project__title">Titre du Projet</h1>
            <p>
              par <a className="project__bearer">Pseudo</a>
            </p>
          </div>

          <div className="project__status element">
          <p className="project__status-indicator">Disponible</p>
          </div>

          <div className="project__participants element">
          <h3 className="project__subtitle">Les compétences des participants au projet</h3>
            <ul className="project__competencies-list">
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>

              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>

              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>

          <div className="project__information element">
            <div className="project__description">
            <h3 className="project__subtitle">Description</h3>
            <h3 className="project__text">Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis, non nulli velariis umbraculorum theatralium latent, quae Campanam imitatus lasciviam Catulus in aedilitate sua suspendit omnium primus; aut pugnaciter aleis certant turpi sono fragosis naribus introrsum reducto spiritu concrepantes; aut quod est studiorum omnium maximum ab ortu lucis ad vesperam sole fatiscunt vel pluviis, per minutias aurigarum equorumque praecipua vel delicta scrutantes.</h3>
            </div>

            <div className="project__functionalities">
            <h3 className="project__subtitle">Fonctionnalités</h3>
            <h3 className="project__text">Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis, non nulli velariis umbraculorum theatralium latent, quae Campanam imitatus lasciviam Catulus in aedilitate sua suspendit omnium primus; aut pugnaciter aleis certant turpi sono fragosis naribus introrsum reducto spiritu concrepantes; aut quod est studiorum omnium maximum ab ortu lucis ad vesperam sole fatiscunt vel pluviis, per minutias aurigarum equorumque praecipua vel delicta scrutantes.</h3>
            </div>

            <div className="project__specificities">
            <h3 className="project__subtitle">Spécificités du projet</h3>
            <h3 className="project__text">Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis, non nulli velariis umbraculorum theatralium latent, quae Campanam imitatus lasciviam Catulus in aedilitate sua suspendit omnium primus; aut pugnaciter aleis certant turpi sono fragosis naribus introrsum reducto spiritu concrepantes; aut quod est studiorum omnium maximum ab ortu lucis ad vesperam sole fatiscunt vel pluviis, per minutias aurigarum equorumque praecipua vel delicta scrutantes.</h3>
            </div>
          </div>

          <button className="project__button">Je me propose !</button>

        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchProjectsResult;
