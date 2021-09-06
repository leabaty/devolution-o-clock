import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.scss";

function HeaderHome({}) {
  return (
    <header className="header">
      <h1 className="header__title">Devolution</h1>
      <div className="header__description">
        <p>
          Proposez vos projets 📝, trouvez des compétences 💪: Devolution permet la
          mise en relation des acteurs du web et d'organisations ou citoyens
          portant des projets à but non lucratifs, à visée sociétale et/ou
          environnementale.
        </p>
        <p>
        👨‍💻Vous êtes développeurs, graphistes, webdesigners, chefs de projets
          digitaux ? Proposez vos compétences, travaillez en équipe et étoffez
          votre portfolio avec des projets qui ont du sens !
        </p>
      </div>
    </header>
  );
}

HeaderHome.propTypes = {};

export default HeaderHome;
