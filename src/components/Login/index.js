/* eslint-disable arrow-body-style */
// == Import : npm
import React from "react";
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
  formSignUpSubmit,
  firstname,
  lastname,
  username,
  email,
  password,
  confirmPassword
}) {
  console.log(name);
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://cdn.discordapp.com/attachments/874925609267118140/877480623034478622/test_Logo_-_transparent_white.png"
          alt="Logo Devolution"
        />
      </Link>
      <div className="login__forms">
        <SignIn />
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
