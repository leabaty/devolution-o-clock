// ACTION TYPES
export const CHANGE_FIRSTNAME_VALUE = 'CHANGE_FIRSTNAME_VALUE';
export const CHANGE_LASTNAME_VALUE = 'CHANGE_LASTNAME_VALUE';
export const CHANGE_USERNAME_VALUE = 'CHANGE_USERNAME_VALUE';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_PASSWORD_CONFIRM_VALUE = 'CHANGE_PASSWORD_CONFIRM_VALUE';
export const GET_LAST_PROJECTS = 'GET_LAST_PROJECTS';
export const SAVE_LAST_PROJECTS = 'SAVE_LAST_PROJECTS';
export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';

// ACTION CREATORS
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

export const getLastProjects = () => ({
  type: GET_LAST_PROJECTS,
});

export const saveLastProjects = (projects) => ({
  type: SAVE_LAST_PROJECTS,
  projects,
});
