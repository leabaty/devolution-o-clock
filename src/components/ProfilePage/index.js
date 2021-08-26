/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from "react";
import PropTypes from "prop-types";

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
            <h1 className="profile__title">Hello, Max!</h1>
            <h2 className="profile__undertitle">Undertitle</h2>
          </div>

          <img className="profile__picture" src="" alt="Profile picture" />
        </div>

        <ProfileStatus />

        <ProfileContact />

        <ProfileCityLinks />

        <ProfileCompetencies />

        <ProfileBio />

        <ProfilePortfolio />
      </div>
    </div>
  );
}

// == Export
export default ProfilePage;
