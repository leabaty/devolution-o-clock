import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function CardUser({name, author, icon, description}) {
  return (
    <div className="cardUser">
      <p className="cardUser__name">{/*{name}*/}Max43</p>
      <p className="cardUser__undertitle">{/*{name}*/}Développeur web</p>
      <img className="cardUser__picture" src="https://cdn.discordapp.com/attachments/874925609267118140/880749515311820830/Capture_decran_2021-08-27_114356.png" alt="Profile picture" />
      <div className="cardUser__status">
        <p>Disponible</p>
      </div>
    </div>
  )
}

CardUser.propTypes = {
  name: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CardUser

