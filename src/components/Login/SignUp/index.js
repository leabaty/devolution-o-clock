import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function SignUp ({
  // userNameValue,
  // emailValue,
  // passwordValue,
  changeUserName
  // onEmailChange,
  // onPasswordChange,
  // onSignUpSubmit,
}) {
  const onSignUpSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    // onFormSubmit();
  }
  const onChangeUserName = (event) => {
    console.log("name")
    changeUserName();
  }
  const onChangeEmail = (event) => {
    console.log("email")
    // onChangeUserName();
  }
  const onChangePassword = (event) => {
    console.log("mdp")
    // onChangeUserName();
  }
  const onChangePasswordconfirm = (event) => {
    console.log("mdp confirm")
    // onChangeUserName();
  }
  return(
  <div className="signup__component">
    <h1 className="signup__title">Je crée un compte</h1>
    <form
      className="signup_form"
      onSubmit={onSignUpSubmit}
    >
      <input
        className="signup__input"
        // value={userNameValue}
        onChange={onChangeUserName}
        placeholder="Nom d'utilisateur"
      />
      <input
        className="signup__input"
        // value={emailValue}
        onChange={onChangeEmail}
        placeholder="Adresse email"
      />
      <input
        className="signup__input"
        // value={passwordValue}
        onChange={onChangePassword}
        type="password"
        placeholder="Mot de passe"
      />
      <input
        className="signup__input"
        // value={passwordConfirmValue}
        onChange={onChangePasswordconfirm}
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
  )
};

SignUp.propTypes = {
  // userNameValue: PropTypes.string.isRequired,
  // emailValue: PropTypes.string.isRequired,
  // passwordValue: PropTypes.string.isRequired,
  // onUserNameChange: PropTypes.string.isRequired,
  // onEmailChange: PropTypes.func.isRequired,
  // onPasswordChange: PropTypes.func.isRequired,
  // onSignUpSubmit: PropTypes.func.isRequired,
};

export default SignUp;
