/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

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

  return (
    <div className="user__page">
      <div className="user__menu">
        <Menu />
      </div>

      <div className="user__subpage">
        <div className="header__user-search">
          <Link to="/search/users">
            <p className="header__comeback">
              <FiArrowLeftCircle /> Revenir à la recherche
            </p>
          </Link>
          <div className="header__user-icon"><HeaderConnected /></div>
        </div>

        <div className="profile-search__component">
          <div className="profile-search__greeting">
            <div>
              <h1 className="profile-search__title">{user.firstname}</h1>
              <h2 className="profile-search__undertitle">{user.user_function}</h2>
            </div>

            <img
              className="profile-search__picture"
              src={user.image_url}
              alt="Profile picture"
            />
          </div>

          <ProfileStatus status={user.user_status} />

          <ProfileContact firstname={user.firstname} 
          lastname={user.lastname}
          email={user.email}
          phone={user.phone}/>

          <ProfileCityLinks city={user.city} />

          <ProfileCompetencies user={user} />

          <ProfileBio bio={user.description} />

          <ProfilePortfolio portfolio={user.portfolio} />

        </div>
      </div>
    </div>
  );
}

// == Export
export default SearchUsersResult;
