import React from 'react';
// import PropTypes from 'prop-types';

// Style
import './style.scss';

const SignUp = ({

}) => (
  <div className="signup__component">
    <h1 className="signup__title">Je crée un compte</h1>
    <form
      className="signup__form"
    >
      <input
        className="signup__input"
        placeholder="Nom d'utilisateur"
      />

      <input
        className="signup__input"
        placeholder="Adresse email"
      />

      <input
        className="signup__input"
        type="password"
        placeholder="Mot de passe"
      />

      <input
        className="signup__input"
        type="password"
        placeholder="Répétez le mot de passe"
      />

      <button
        className="signup__send"
        type="submit"
      >
        S'enregistrer
      </button>
    </form>
  </div>
);

SignUp.propTypes = {

};

export default SignUp;