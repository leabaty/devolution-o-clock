/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useState } from "react";
import skilldata from "./skilldata";
// import PropTypes from 'prop-types';
import skills from './skilldata';
// Style
import "./style.scss";

// == Composant
function ProfileCompetencies() {
  const [bool, setBool] = useState(skills);
  console.log(bool);
  return (
    <div className="profile__skills element">
      <h3 className="profile__skills__title">Mes compétences</h3>
      <ul className="profile__skills__checkbox ks-cboxtags">
        { skills.map( ({id, label}) =>

          <li key={id}>
            <input type="checkbox" id={`c${id}`} value="false"/>
            <label htmlFor={label}>{label}</label>
          </li>
          ,{/*
            <li key={id}>
            <input id={`s${id}`}
                  type="checkbox" className="switch"
                  //checked={ id%2 === 0 ? 'checked' : ''}
                  onChange={e => { console.log(e.target.checked)}}
            />
              <label htmlFor={`s${id}`}>{label}</label>
            </li>
            */}
          )
        }
      </ul>
    </div>
  );
}

// == Export
export default ProfileCompetencies;
