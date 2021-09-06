/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from "react";
// import PropTypes from 'prop-types';

// Composants
import ProfileCompetencies from "./ProfileCompetencies";
// Icons
import { AiOutlineUser, AiFillGithub, AiFillLinkedin, AiFillDribbbleCircle, AiFillWarning } from 'react-icons/ai';
import { FiMail, FiPhone,FiExternalLink } from 'react-icons/fi';
import { BiMap, BiLockAlt } from 'react-icons/bi';
import {BsPen} from 'react-icons/bs';

// Style
import "./style.scss";

// == Composant
function ProfilePageForm({ userData, logged, allSkills, skills, handleDeleteSkill, handleAddSkill }) {
  useEffect(allSkills, []);
    return (
      <div className={`profile__page ${logged ? 'islog' : ''}`}>
      <form className="profile__component">
        <div className="profile__greeting">
          <div className="profile__titles">
            <h1 className="profile__title">Hello, {userData.firstname} !</h1>
            <input
              className="profile-form__undertitle"
              placeholder="Développeur web, graphiste, UI/UX Designer..."
            />
          </div>

          <img className="profile-form__picture" src={userData.image_url} alt="Profile picture" />
        </div>

        <div className="profile-form__status element-form">
          <select className="profile-form__status-indicator" id="status">
            <option value="Disponible">Disponible</option>
            <option value="Bientôt disponible">Bientôt disponible</option>
            <option value="Non disponible">Non disponible</option>
          </select>
        </div>

        <div className="profile-form__contact-info element-form">
          <div className="element-form-child"><AiOutlineUser /><input className="profile-form__surname" placeholder="Prénom" value={userData.firstname} /></div>

          <div className="element-form-child"><AiOutlineUser /><input className="profile-form__name" placeholder="Nom" value={userData.lastname}/></div>
          <div className="element-form-child"><FiPhone /><input
            className="profile-form__phone"
            placeholder="Numéro de téléphone"
          /></div>
          <div className="element-form-child"><FiMail /><input className="profile-form__email" placeholder="Adresse email" value={userData.email}/></div>

          <div className="element-form-child"><p className="profile-form__warning">
          <AiFillWarning /> Un moyen de contact est nécessaire afin de vous permettre de
            participer aux projets. Attention, ces données sont visibles par
            tous les utilisateurs enregistrés. Si vous ne souhaitez pas partager
            une information, veuillez laisser le champ vide.
          </p></div>

        </div>

        <div className="profile-form__city-links element-form">

          <div className="element-form-child"><BiMap /><input className="profile-form__city" placeholder="Ville" />
          </div>

          <div className="element-form-child"><AiFillDribbbleCircle />
            <input
              className="profile-form__link-dribbble"
              placeholder="Lien vers votre page Dribbble"
            />
          </div>

          <div className="element-form-child"><AiFillLinkedin />
            <input
              className="profile-form__link-linkedin"
              placeholder="Lien vers votre profil LinkedIn"
            />
          </div>

          <div className="element-form-child"><AiFillGithub />
            <input
              className="profile-form__link-github"
              placeholder="Lien vers votre page GitHub"
            />
          </div>
        </div>


          <ProfileCompetencies
            userData={userData}
            skills={skills}
            handleDeleteSkill={handleDeleteSkill}
            handleAddSkill={handleAddSkill}
          />

        <div className="profile-form__bio element-form">
          <h3 className="profile-form__category-title">Ma bio</h3>
          <div className="element-form-child"><BsPen /><textarea
            className="profile-form__description"
            placeholder="Une petite bio : Votre parcours, ce qui vous motive, vos centres d'intérêt, ce que vous souhaitez apprendre..."
          /></div>
        </div>

        <div className="profile-form__portfolio element-form">
        <h3 className="profile-form__category-title">Mon portfolio</h3>
        <div className="element-form-child"><FiExternalLink /><input
            className="profile-form__portfolio-link"
            placeholder="Lien vers votre portfolio personnel"
          /></div>
        </div>

        <div className="profile-form__password element-form">
        <h3 className="profile-form__category-title">Modifier mon mot de passe</h3>
        <div className="element-form-child"><BiLockAlt /><input className="profile-form__password-input" type="password" placeholder="Mot de passe"/></div>
        <div className="element-form-child"><BiLockAlt /><input className="profile-form__password-input" type="password" placeholder="Nouveau mot de passe"/></div>
        <div className="element-form-child"><BiLockAlt /><input className="profile-form__password-input" type="password" placeholder="Confirmez le nouveau mot de passe"/></div>
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
export default ProfilePageForm;
