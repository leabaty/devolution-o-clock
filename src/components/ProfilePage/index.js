/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// Composants
import Menu from 'src/components/Menu';

// Style
import './style.scss';

// == Composant
function ProfilePage() {
  return (
    <div className="profile__menu">
        <Menu/>
    </div>

  );
}

// == Export
export default ProfilePage;
