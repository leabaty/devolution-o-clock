// ACTION TYPES
export const CHANGE_FIRSTNAME_VALUE = 'CHANGE_FIRSTNAME_VALUE';
export const CHANGE_LASTNAME_VALUE = 'CHANGE_LASTNAME_VALUE';
export const CHANGE_USERNAME_VALUE = 'CHANGE_USERNAME_VALUE';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_PASSWORD_CONFIRM_VALUE = 'CHANGE_PASSWORD_CONFIRM_VALUE';
export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';

export const SIGN_IN_SUBMIT = 'SIGN_IN_SUBMIT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_TOKEN = 'CHECK_TOKEN';

export const CHANGE_SIGN_IN_EMAIL_VALUE = 'CHANGE_SIGN_IN_EMAIL_VALUE';
export const CHANGE_SIGN_IN_PASSWORD_VALUE = 'CHANGE_SIGN_IN_PASSWORD_VALUE';

export const GET_LAST_PROJECTS = 'GET_LAST_PROJECTS';
export const SAVE_LAST_PROJECTS = 'SAVE_LAST_PROJECTS';


// ACTION CREATORS
// --- Sign Up
export const changeFirstnameValue = (value) => ({
  type: CHANGE_FIRSTNAME_VALUE,
  value,
});

export const changeLastnameValue = (value) => ({
  type: CHANGE_LASTNAME_VALUE,
  value,
});

export const changeUsernameValue = (value) => ({
  type: CHANGE_USERNAME_VALUE,
  value,
});

export const changeEmailValue = (value) => ({
  type: CHANGE_EMAIL_VALUE,
  value,
});

export const changePasswordValue = (value) => ({
  type: CHANGE_PASSWORD_VALUE,
  value,
});

export const changePasswordConfirmValue = (value) => ({
  type: CHANGE_PASSWORD_CONFIRM_VALUE,
  value,
});

export const signUpSubmit = () => ({
  type: SIGN_UP_SUBMIT,
});


// --- Sign In
export const changeSignInEmailValue = (value) => ({
  type: CHANGE_SIGN_IN_EMAIL_VALUE,
  value,
});

export const changeSignInPasswordValue = (value) => ({
  type: CHANGE_SIGN_IN_PASSWORD_VALUE,
  value,
});

export const signInSubmit = () => ({
  type: SIGN_IN_SUBMIT,
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const checkToken = () => ({
  type: CHECK_TOKEN,
});

// --- Projects
export const getLastProjects = () => ({
  type: GET_LAST_PROJECTS,
});

export const saveLastProjects = (projects) => ({
  type: SAVE_LAST_PROJECTS,
  projects,
});

