/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from 'react-router-dom';

// Composants
import Menu from "src/components/Menu";
import ProfileStatus from "./ProfileStatus";
import ProfileContact from "./ProfileContact";
import ProfileCityLinks from "./ProfileCityLinks";
import ProfileCompetencies from "./ProfileCompetencies";
import ProfileBio from "./ProfileBio";
import ProfilePortfolio from "./ProfilePortfolio";

// Style
import "./style.scss";

// == Composant
function ProfilePage({ profileData, userData }) {
  useEffect(profileData, []);

  return (
    <div className="profile__page">
      <div className="profile__menu">
        <Menu />
      </div>

      <div className="profile__component">
        <div className="profile__greeting">
          <div>
            <h1 className="profile__title">Hello, {userData.firstname} !</h1>
            <h2 className="profile__undertitle">
              EN DUR Fonction (dév web, etc)
            </h2>
          </div>

          <img className="profile__picture" src="https://cdn.discordapp.com/attachments/874925609267118140/880749515311820830/Capture_decran_2021-08-27_114356.png" alt="Profile picture" />
        </div>

        <ProfileStatus userData={userData} />

        <ProfileContact userData={userData} />

        <ProfileCityLinks userData={userData} />

        <ProfileCompetencies userData={userData} />

        <ProfileBio userData={userData} />

        <ProfilePortfolio userData={userData} />

        <div className="profile__buttons">
            <button
              className="profile__modify"
              type="submit"
              // onClick={() => history.push("/modifyprofile")}
            >
              Modifier mon profil
            </button>
{/* 
            <button
              className="profile__delete"
              type="submit"
              onClick={() => history.push("/deleteprofile")}
            >
              Supprimer mon profil
            </button>


            <button
              className="profile__logout"
              type="submit"
              onClick={() => history.push("/logout")}
            >
              Déconnexion
            </button>
          */}

        </div>
      </div>
    </div>
  );
}

// == Export
export default ProfilePage;
