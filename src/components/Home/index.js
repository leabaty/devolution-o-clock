import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import HeaderHome from "src/containers/HeaderHome";
import CardProject from "src/components/CardProject";

import "./style.scss";

function Home({ projects, lastProjectsLoading }) {
  useEffect(lastProjectsLoading, []);

  return (
    <div className="home">
      <HeaderHome />
      <h2 className="home__title">Les derniers projets</h2>
      <div className="home__cards">
        {/* for (let index = 0 ; index < 2; index++) {

        } */}
        {projects.map((project) => (
          <Link key={project.id} to={`/search/projects/${project.id}`}>
            <CardProject key={project.id} {...project} />
          </Link>
        ))}
      </div>
      <Link to="/searchProjects">
        <button className="home__button">Voir plus de projets</button>
      </Link>
    </div>
  );
}

Home.propTypes = {};

export default Home;
