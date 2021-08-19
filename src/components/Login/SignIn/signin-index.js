import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const SignIn = ({
  isError,
  emailValue,
  passwordValue,
  onEmailChange,
  onPasswordChange,
  onSignInSubmit,
}) => (
  <div className='signin__component'>
  <h1 className='signin__title'>J'ai déjà un compte</h1>
      <form
        className="signin__form"
        onSubmit={onSignInSubmit}
      >
        <input
          className="signin__input"
          value={emailValue}
          onChange={onEmailChange}
          placeholder="Adresse email"
        />
        <input
          className="signin__input"
          value={passwordValue}
          onChange={onPasswordChange}
          type="password"
          placeholder="Mot de passe"
        />
        {isError && <p className="signin__error">Erreur de connexion</p>}
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
  isError: PropTypes.bool.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSignInSubmit: PropTypes.func.isRequired,
};

export default SignIn;
