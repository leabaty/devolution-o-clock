import React from 'react'
import PropTypes from 'prop-types'

import Header from 'src/components/Header';
import CardProject from 'src/components/CardProject';
import Footer from 'src/components/Footer';


import './style.scss'

function Home({projects}) {
  return (
    <div className="home">
      <Header />
      <h2 className="home__title">Les derniers projets</h2>
      <div className="home__cards">
        {projects.map((project) => (
          <CardProject
            key={project.id}
            {...project}
          />
        ))};
      </div>
      <button className="home__button">Voir plus de projets</button>
      <Footer />
    </div>
  )
}

Home.propTypes = {

}

export default Home

