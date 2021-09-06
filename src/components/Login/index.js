/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// Composants
import SignIn from "./SignIn";
import SignUp from "./SignUp/index";

// Style
import "./style.scss";

// == Composant
function Login({
  changeInputFirstnameValue,
  changeInputLastnameValue,
  changeInputUsernameValue,
  changeInputEmailValue,
  changeInputPasswordValue,
  changeInputPasswordConfirmValue,
  changeSignInInputEmailValue,
  changeSignInInputPasswordValue,
  formSignUpSubmit,
  formSignInSubmit,
  firstname,
  lastname,
  username,
  email,
  password,
  confirmPassword,
  signInEmail,
  signInPassword,
}) {

  return (
    <div className="login">
      <div className="login__forms">
        <SignIn
          onFormSignInSubmit={formSignInSubmit}
          onChangeSignInInputEmailValue={changeSignInInputEmailValue}
          onChangeSignInInputPasswordValue={changeSignInInputPasswordValue}
          signInEmail={signInEmail}
          signInPassword={signInPassword}
        />
        <SignUp
          onChangeInputFirstnameValue={changeInputFirstnameValue}
          onChangeInputLastnameValue={changeInputLastnameValue}
          onChangeInputUsernameValue={changeInputUsernameValue}
          onChangeInputEmailValue={changeInputEmailValue}
          onChangeInputPasswordValue={changeInputPasswordValue}
          onChangeInputPasswordConfirmValue={changeInputPasswordConfirmValue}
          onFormSignUpSubmit={formSignUpSubmit}
          firstname={firstname}
          lastname={lastname}
          username={username}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
        />
      </div>
    </div>
  );
}

// == Export
export default Login;
