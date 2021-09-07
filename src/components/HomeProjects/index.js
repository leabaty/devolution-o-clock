import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import HomeDevolution from "src/containers/HomeDevolution";
import CardProject from "src/components/CardProject";

import "./style.scss";

function HomeProjects({ projects, lastProjectsLoading, logged }) {
  useEffect(lastProjectsLoading, []);
  return (
    <div className={`home ${ logged ? 'islog' : '' }`}>
      <HomeDevolution />
      <h2 className="home__title">Les derniers projets</h2>

      <div className="home__cards--container">
        <div className="home__cards">
          {/* for (let index = 0 ; index < 2; index++) {

          } */}
          {projects.map((project) => (
            <Link key={project.id} to={`/more/${project.id}`}>
              <CardProject key={project.id} {...project} />
            </Link>
          ))}
          </div>
        </div>

      <Link to="/more">
        <button className="home__button">Voir plus de projets</button>
      </Link>
    </div>
  );
}

HomeProjects.propTypes = {};

export default HomeProjects;