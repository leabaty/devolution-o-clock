/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
// import PropTypes from 'prop-types';

// Composants
import Menu from "src/components/Menu";

// Style
import "./style.scss";

// == Composant
function ProfilePage({ profileData, userData }) {
    useEffect(profileData, []);
  
    return (
    <div className="profile-form__form">
      <div className="profile-form__menu">
        <Menu />
      </div>

      <form className="profile-form__component">
        <div className="profile-form__greeting">
          <div>
            <h1 className="profile-form__title">Hello, {userData.firstname} !</h1>
            <input
              className="profile-form__undertitle"
              placeholder="Développeur web, graphiste, UI/UX Designer..."
            />
          </div>

          <img className="profile-form__picture" src="" alt="Profile picture" />
        </div>

        <div className="profile-form__status element">
          <select className="profile-form__status-indicator" id="status">
            <option value="Disponible">Disponible</option>
            <option value="Bientôt disponible">Bientôt disponible</option>
            <option value="Non disponible">Non disponible</option>
          </select>
        </div>

        <div className="profile-form__contact-info element">
          <input className="profile-form__surname" placeholder="Prénom" />
          <input className="profile-form__name" placeholder="Nom" />

          <input className="profile-form__email" placeholder="Adresse email" />

          <input
            className="profile-form__phone"
            placeholder="Numéro de téléphone"
          />

          <p className="profile-form__warning">
            Un moyen de contact est nécessaire afin de vous permettre de
            participer aux projets. Attention, ces données sont visibles par
            tous les utilisateurs enregistrés. Si vous ne souhaitez pas partager
            une information, veuillez laisser le champ vide.
          </p>
        </div>

        <div className="profile-form__city-links element">
          <input className="profile-form__city" placeholder="Ville" />
          <input
            className="profile-form__link-dribbble"
            placeholder="Lien vers votre page Dribbble"
          />

          <input
            className="profile-form__link-linkedin"
            placeholder="Lien vers votre profil LinkedIn"
          />

          <input
            className="profile-form__link-github"
            placeholder="Lien vers votre page GitHub"
          />
        </div>

        <div className="profile-form__competencies element">
          <h3 className="profile-form__category-title">Mes compétences</h3>

          <div>
            <label>
              <input type="checkbox" />
              Competency
            </label>
          </div>
        </div>

        <div className="profile-form__bio element">
          <h3 className="profile-form__category-title">Ma bio</h3>
          <input
            className="profile-form__description"
            placeholder="Une petite bio : Votre parcours, ce qui vous motive, vos centres d'intérêt, ce que vous souhaitez apprendre..."
          />
        </div>

        <div className="profile-form__portfolio element">
          <input
            className="profile-form__portfolio-link"
            placeholder="Lien vers site n°1"
          />
        </div>

        <div>
          <button className="profile-form__send" type="submit">
            Enregistrer les modifications
          </button>
        </div>

      </form>
    </div>
  );
}

// == Export
export default ProfilePage;
