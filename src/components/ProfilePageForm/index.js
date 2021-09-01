/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Composants
import Menu from "src/components/Menu";

// Icons
import {
  AiOutlineUser,
  AiFillGithub,
  AiFillLinkedin,
  AiFillDribbbleCircle,
  AiFillWarning,
} from "react-icons/ai";
import { FiMail, FiPhone, FiExternalLink } from "react-icons/fi";
import { BiMap, BiLockAlt } from "react-icons/bi";
import { BsPen } from "react-icons/bs";

// Style
import "./style.scss";

// == Composant
function ProfilePage({
  userData,
  modifyProfileSubmitForm,
  changeProfileSubtitleValue,
  changeProfileStatusValue,
  changeProfileFirstnameValue,
  changeProfileLastnameValue,
  changeProfilePhoneValue,
  changeProfileEmailValue,
  changeProfileCityValue,
  changeProfileDribbbleValue,
  changeProfileLinkedInValue,
  changeProfileGitHubValue,
  changeProfileBioValue,
  changeProfilePortfolioValue,
  changeProfilePasswordValue,
  changeProfileNewPasswordValue,
  changeProfileNewPasswordConfirmValue,
  profileSubtitle,
  profileStatus,
  profileFirstname,
  profileLastname,
  profilePhone,
  profileEmail,
  profileCity,
  profileDribble,
  profileLinkedIn,
  profileGitHub,
  profileBio,
  profilePortfolio,
  profilePassword,
  profileNewPassword,
  profileNewPasswordConfirm,
}) {
  const history = useHistory();

  const onModifyProfileSubmitForm = (event) => {
    event.preventDefault();
    modifyProfileSubmitForm(history);
  };

  const onChangeProfileSubtitleValue = (event) => {
    changeProfileSubtitleValue(event.target.value);
  };

  const onChangeProfileStatusValue = (event) => {
    changeProfileStatusValue(event.target.value);
  };

  const onChangeProfileFirstnameValue = (event) => {
    changeProfileFirstnameValue(event.target.value);
  };

  const onChangeProfileLastnameValue = (event) => {
    changeProfileLastnameValue(event.target.value);
  };

  const onChangeProfilePhoneValue = (event) => {
    changeProfilePhoneValue(event.target.value);
  };

  const onChangeProfileEmailValue = (event) => {
    changeProfileEmailValue(event.target.value);
  };

  const onChangeProfileCityValue = (event) => {
    changeProfileCityValue(event.target.value);
  };

  const onChangeProfileDribbbleValue = (event) => {
    changeProfileDribbbleValue(event.target.value);
  };

  const onChangeProfileLinkedInValue = (event) => {
    changeProfileLinkedInValue(event.target.value);
  };

  const onChangeProfileGitHubValue = (event) => {
    changeProfileGitHubValue(event.target.value);
  };

  const onChangeProfileBioValue = (event) => {
    changeProfileBioValue(event.target.value);
  };

  const onChangeProfilePortfolioValue = (event) => {
    changeProfilePortfolioValue(event.target.value);
  };

  const onChangeProfilePasswordValue = (event) => {
    changeProfilePasswordValue(event.target.value);
  };

  const onChangeProfileNewPasswordValue = (event) => {
    changeProfileNewPasswordValue(event.target.value);
  };

  const onChangeProfileNewPasswordConfirmValue = (event) => {
    changeProfileNewPasswordConfirmValue(event.target.value);
  };

  return (
    <div className="profile__page">
      <div className="profile__menu">
        <Menu />
      </div>

      <form className="profile__component" onSubmit={onModifyProfileSubmitForm}>
        <div className="profile__greeting">
          <div className="profile__titles">
            <h1 className="profile__title">Hello, {userData.firstname} !</h1>
            <input
              className="profile-form__undertitle"
              value={profileSubtitle}
              onChange={onChangeProfileSubtitleValue}
              placeholder="Développeur web, graphiste, UI/UX Designer..."
            />
          </div>

          <img
            className="profile-form__picture"
            src={userData.image_url}
            alt="Profile picture"
          />
        </div>

        <div className="profile-form__status element-form">
          <select
            className="profile-form__status-indicator"
            value={profileStatus}
            onChange={onChangeProfileStatusValue}
            id="status"
          >
            <option value="Disponible">Disponible</option>
            <option value="Bientôt disponible">Bientôt disponible</option>
            <option value="Non disponible">Non disponible</option>
          </select>
        </div>

        <div className="profile-form__contact-info element-form">
          <div className="element-form-child">
            <AiOutlineUser />
            <input
              className="profile-form__surname"
              value={profileFirstname}
              onChange={onChangeProfileFirstnameValue}
              placeholder="Prénom"
            />
          </div>

          <div className="element-form-child">
            <AiOutlineUser />
            <input
              className="profile-form__name"
              value={profileLastname}
              onChange={onChangeProfileLastnameValue}
              placeholder="Nom"
            />
          </div>
          <div className="element-form-child">
            <FiPhone />
            <input
              className="profile-form__phone"
              value={profilePhone}
              onChange={onChangeProfilePhoneValue}
              placeholder="Numéro de téléphone"
            />
          </div>
          <div className="element-form-child">
            <FiMail />
            <input
              className="profile-form__email"
              value={profileEmail}
              onChange={onChangeProfileEmailValue}
              placeholder="Adresse email"
              value={userData.email}
            />
          </div>

          <div className="element-form-child">
            <p className="profile-form__warning">
              <AiFillWarning /> Un moyen de contact est nécessaire afin de vous
              permettre de participer aux projets. Attention, ces données sont
              visibles par tous les utilisateurs enregistrés. Si vous ne
              souhaitez pas partager une information, veuillez laisser le champ
              vide.
            </p>
          </div>
        </div>

        <div className="profile-form__city-links element-form">
          <div className="element-form-child">
            <BiMap />
            <input
              className="profile-form__city"
              value={profileCity}
              onChange={onChangeProfileCityValue}
              placeholder="Ville"
            />
          </div>

          <div className="element-form-child">
            <AiFillDribbbleCircle />
            <input
              className="profile-form__link-dribbble"
              value={profileDribble}
              onChange={onChangeProfileDribbbleValue}
              placeholder="Lien vers votre page Dribbble"
            />
          </div>

          <div className="element-form-child">
            <AiFillLinkedin />
            <input
              className="profile-form__link-linkedin"
              value={profileLinkedIn}
              onChange={onChangeProfileLinkedInValue}
              placeholder="Lien vers votre profil LinkedIn"
            />
          </div>

          <div className="element-form-child">
            <AiFillGithub />
            <input
              className="profile-form__link-github"
              value={profileGitHub}
              onChange={onChangeProfileGitHubValue}
              placeholder="Lien vers votre page GitHub"
            />
          </div>
        </div>
        <div className="profile-form__competencies element-form">
          <h3 className="profile-form__category-title">Mes compétences</h3>

          <div>
            <label>
              <input type="checkbox" />
              Super-compétence
            </label>
          </div>
        </div>

        <div className="profile-form__bio element-form">
          <h3 className="profile-form__category-title">Ma bio</h3>
          <div className="element-form-child">
            <BsPen />
            <textarea
              className="profile-form__description"
              value={profileBio}
              onChange={onChangeProfileBioValue}
              placeholder="Une petite bio : Votre parcours, ce qui vous motive, vos centres d'intérêt, ce que vous souhaitez apprendre..."
            />
          </div>
        </div>

        <div className="profile-form__portfolio element-form">
          <h3 className="profile-form__category-title">Mon portfolio</h3>
          <div className="element-form-child">
            <FiExternalLink />
            <input
              className="profile-form__portfolio-link"
              value={profilePortfolio}
              onChange={onChangeProfilePortfolioValue}
              placeholder="Lien vers votre portfolio personnel"
            />
          </div>
        </div>

        <div className="profile-form__password element-form">
          <h3 className="profile-form__category-title">
            Modifier mon mot de passe
          </h3>
          <div className="element-form-child">
            <BiLockAlt />
            <input
              className="profile-form__password-input"
              type="password"
              value={profilePassword}
              onChange={onChangeProfilePasswordValue}
              placeholder="Mot de passe"
            />
          </div>
          <div className="element-form-child">
            <BiLockAlt />
            <input
              className="profile-form__password-input"
              type="password"
              value={profileNewPassword}
              onChange={onChangeProfileNewPasswordValue}
              placeholder="Nouveau mot de passe"
            />
          </div>
          <div className="element-form-child">
            <BiLockAlt />
            <input
              className="profile-form__password-input"
              type="password"
              value={profileNewPasswordConfirm}
              onChange={onChangeProfileNewPasswordConfirmValue}
              placeholder="Confirmez le nouveau mot de passe"
            />
          </div>
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
