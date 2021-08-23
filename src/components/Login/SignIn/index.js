import React from 'react';
// import PropTypes from 'prop-types';

// Style
import './style.scss';

const SignIn = ({
}) => (
  <div className='signin__component'>
  <h1 className='signin__title' >J'ai déjà un compte</h1>

      <form
        className="signin__form"
      >
        <input
          className="signin__input"
          placeholder="Adresse email"
        />

        <input
          className="signin__input"
          type="password"
          placeholder="Mot de passe"
        />

        <button
          className="signin__send"
          type="submit"
        >
          Se connecter
        </button>
      </form>
  </div>
);

SignIn.propTypes = {
};

export default SignIn;
