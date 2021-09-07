/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import skillsdata from './fakedata';
// Style
import "./style.scss";

// == Composant
function ProfileCompetencies({ userData, skills, handleDeleteSkill, handleAddSkill }) {

  const [userSkills, setUserSkills] = useState(userData.users_skills);
  const [allSkills, setAllSkills] = useState(skills.skills);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    return () => {
    }
  }, [userData.users_skills]);

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // AJOUTER UNE COMPETENCE
      handleAddSkill(e.target.id)
    } else {
      // ENLEVER UNE COMPETENCE
      handleDeleteSkill(e.target.id)
    }
  }

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="profile__skills element">
      <h3 className="profile__skills__title">Mes compétences</h3>
      <ul className="profile__skills__checkbox ks-cboxtags">
        { allSkills.map( ({id, label}) =>

          <li key={id}>
            <input type="checkbox"
              id={id}
              onClick={handleCheckbox}
              defaultChecked={userSkills[id - 1] ? userSkills[id - 1].id === id ? 'checked' : '' : null }
              onChange={handleChange}

            />
            <label htmlFor={id}>{label}</label>
          </li>

          )

        }
      </ul>
    </div>
  );
}

// == Export
export default ProfileCompetencies;
