// ACTION TYPES
export const CHANGE_FIRSTNAME_VALUE = 'CHANGE_FIRSTNAME_VALUE';
export const CHANGE_LASTNAME_VALUE = 'CHANGE_LASTNAME_VALUE';
export const CHANGE_USERNAME_VALUE = 'CHANGE_USERNAME_VALUE';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_PASSWORD_CONFIRM_VALUE = 'CHANGE_PASSWORD_CONFIRM_VALUE';
export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';

export const CHANGE_SIGN_IN_EMAIL_VALUE = 'CHANGE_SIGN_IN_EMAIL_VALUE';
export const CHANGE_SIGN_IN_PASSWORD_VALUE = 'CHANGE_SIGN_IN_PASSWORD_VALUE';
export const SIGN_IN_SUBMIT = 'SIGN_IN_SUBMIT';
export const SAVE_USER = 'SAVE_USER';

export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const SAVE_ALL_PROJECTS = 'SAVE_ALL_PROJECTS';

export const GET_PROFILE_DATA = 'GET_PROFILE_DATA';
export const SAVE_PROFILE_DATA = 'SAVE_PROFILE_DATA';

export const CHANGE_PROJECT_VALUE = 'CHANGE_PROJECT_VALUE';
export const CHANGE_USER_VALUE = 'CHANGE_USER_VALUE';
export const GET_SEARCH_PROJECT = 'GET_SEARCH_PROJECT';
export const GET_SEARCH_USER = 'GET_SEARCH_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS';


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

export const signInSubmit = (value) => ({
  type: SIGN_IN_SUBMIT,
  value
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

// --- Projects
export const getAllProjects = () => ({
  type: GET_ALL_PROJECTS,
});

export const saveAllProjects = (projects) => ({
  type: SAVE_ALL_PROJECTS,
  projects,
});

// --- ProfilePage
export const getProfileData = () => ({
  type: GET_PROFILE_DATA,
});

export const saveProfileData = (dataProfile) => ({
  type: SAVE_PROFILE_DATA,
  dataProfile,
});

// --- SearchPage
export const changeProjectValue = (value) => ({
  type: CHANGE_PROJECT_VALUE,
  value
});

export const changeUserValue = (value) => ({
  type: CHANGE_USER_VALUE,
  value,
});

export const getSearchProject = (value) => ({
  type: GET_SEARCH_PROJECT,
  value
});

export const getSearchUser = (value) => ({
  type: GET_SEARCH_USER,
  value,
});

export const getAllUsers = () => ({
  type : GET_ALL_USERS,
}); 

export const saveUsers = (users) => ({
  type : SAVE_ALL_USERS,
  users,
});