import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import HeaderHome from 'src/components/HeaderHome';

import './style.scss'

function Error404({  }) {

    return (
        <header className="error404">
            <h1 className="error404__title">Error 404</h1>
            <p className="error404__description">La page que vous recherchez semble introuvable.
             Cliquez sur le logo pour revenir à la Home</p>
        </header>
    )
}

Error404.propTypes = {

}

export default Error404
