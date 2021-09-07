// == Import : npm
import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';

// Style
import "./style.scss";

// == Composant
function ProfileCompetencies(/*{ userskills }*/) {

//   console.log ("skills :", userskills)

//   const [skills, setskills] = useState();

//   useEffect(() => {
//     setskills(userskills);
//     return () => {
//     }
//   }, [userskills]);

  return (
    <div className="profile__skills element">
      <h3 className="profile__skills__title">Mes compétences</h3>
      <ul className="profile__skills__checkbox ks-cboxtags">
        {/* { skills?.map( ({id, label}) => */}
          <li /*key={id}*/>
            <input type="checkbox" /*id={id}*/ checked readOnly />
            <label /*htmlFor={id}*/>HTML{/*label*/}</label>
          </li>

          <li /*key={id}*/>
            <input type="checkbox" /*id={id}*/ checked readOnly />
            <label /*htmlFor={id}*/>CSS{/*label*/}</label>
          </li>

          <li /*key={id}*/>
            <input type="checkbox" /*id={id}*/ checked readOnly />
            <label /*htmlFor={id}*/>JavaScript{/*label*/}</label>
          </li>



          {/* )
        } */}
      </ul>
    </div>
  );
}

// == Export
export default ProfileCompetencies;
