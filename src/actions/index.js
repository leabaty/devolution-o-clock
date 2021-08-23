// ACTION TYPES
export const CHANGE_NAME_VALUE = 'CHANGE_NAME_VALUE';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_PASSWORD_CONFIRM_VALUE = 'CHANGE_PASSWORD_CONFIRM_VALUE';
export const GET_LAST_PROJECTS = 'GET_LAST_PROJECTS';
export const SAVE_LAST_PROJECTS = 'SAVE_LAST_PROJECTS';

// ACTION CREATORS
export const changeNameValue = (value) => ({
  type: CHANGE_NAME_VALUE,
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

export const getLastProjects = () => ({
  type: GET_LAST_PROJECTS,
});

export const saveLastProjects = (projects) => ({
  type: SAVE_LAST_PROJECTS,
  projects,
});
