/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";

// Composants
import Menu from "src/components/Menu";
import HeaderConnected from "src/components/HeaderConnected";
import ProfileStatus from "./ProfileStatus";
import ProfileContact from "./ProfileContact";
import ProfileCityLinks from "./ProfileCityLinks";
import ProfileCompetencies from "./ProfileCompetencies";
import ProfileBio from "./ProfileBio";
import ProfilePortfolio from "./ProfilePortfolio";

// Icons
import { FiArrowLeftCircle } from "react-icons/fi";

// Style
import "./style.scss";

// == Composant
function SearchUsersResult({ user }) {
console.log(user)
  return (
    <div className="user__page">
      <div className="user__menu">
        <Menu />
      </div>

      <div className="user__subpage">
        <div className="header__user-search">
          <p className="header__comeback">
            <FiArrowLeftCircle /> Revenir à la recherche
          </p>
          <HeaderConnected />
        </div>

        <div className="profile__component">
          <div className="profile__greeting">
            <div>
              <h1 className="profile__title">{user.firstname}</h1>
              <h2 className="profile__undertitle">{user.user_function}</h2>
            </div>

            <img
              className="profile__picture"
              src="https://cdn.discordapp.com/attachments/874925609267118140/880749515311820830/Capture_decran_2021-08-27_114356.png"
              alt="Profile picture"
            />
          </div>

          <ProfileStatus status={user.user_status} />

          <ProfileContact firstname={user.firstname} 
          lastname={user.lastname}
          email={user.email}
          phone={user.phone}/>

          <ProfileCityLinks city={user.city} />

          {/* <ProfileCompetencies user={user} /> */}

          <ProfileBio bio={user.description} />

          <ProfilePortfolio portfolio={user.portfolio} />

        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchUsersResult;
