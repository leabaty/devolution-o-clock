import {
  SAVE_USER,
  SAVE_PROFILE_DATA,
  CHANGE_PROFILE_SUBTITLE,
  CHANGE_PROFILE_STATUS,
  CHANGE_PROFILE_FIRSTNAME,
  CHANGE_PROFILE_LASTNAME,
  CHANGE_PROFILE_PHONE,
  CHANGE_PROFILE_EMAIL,
  CHANGE_PROFILE_CITY,
  CHANGE_PROFILE_DRIBBBLE,
  CHANGE_PROFILE_LINKEDIN,
  CHANGE_PROFILE_GITHUB,
  CHANGE_PROFILE_BIO,
  CHANGE_PROFILE_PORTFOLIO,
  CHANGE_PROFILE_PASSWORD,
  CHANGE_PROFILE_NEW_PASSWORD,
  CHANGE_PROFILE_NEW_PASSWORD_CONFIRM,
} from "src/actions";

export const initialState = {
  logged: false,
  dataUser: [],
  projectUser: [],
  profileSubtitle: "",
  profileStatus: "Disponible",
  profileFirstname: "",
  profileLastname: "",
  profilePhone: "",
  profileEmail: "",
  profileCity: "",
  profileDribbble: "",
  profileLinkedIn: "",
  profileGitHub: "",
  profileBio: "",
  profilePortfolio: "",
  profilePassword: "",
  profileNewPassword: "",
  profileNewPasswordConfirm: "",
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER: {
      return {
        ...state,
        logged: true,
      };
    }
    case SAVE_PROFILE_DATA: {
      const { findUser, findProject } = action.dataProfile;
      return {
        dataUser: findUser,
        projectUser: findProject,
      };
    }
    case CHANGE_PROFILE_SUBTITLE: {
      return {
        ...state,
        profileSubtitle: action.value,
      };
    }

    case CHANGE_PROFILE_STATUS: {
      return {
        ...state,
        profileStatus: action.value,
      };
    }

    case CHANGE_PROFILE_FIRSTNAME: {
      return {
        ...state,
        profileFirstname: action.value,
      };
    }

    case CHANGE_PROFILE_LASTNAME: {
      return {
        ...state,
        profileLastname: action.value,
      };
    }

    case CHANGE_PROFILE_PHONE: {
      return {
        ...state,
        profilePhone: action.value,
      };
    }

    case CHANGE_PROFILE_EMAIL: {
      return {
        ...state,
        profileEmail: action.value,
      };
    }

    case CHANGE_PROFILE_CITY: {
      return {
        ...state,
        profileCity: action.value,
      };
    }

    case CHANGE_PROFILE_DRIBBBLE: {
      return {
        ...state,
        profileDribbble: action.value,
      };
    }

    case CHANGE_PROFILE_LINKEDIN: {
      return {
        ...state,
        profileLinkedIn: action.value,
      };
    }

    case CHANGE_PROFILE_GITHUB: {
      return {
        ...state,
        profileGitHub: action.value,
      };
    }
    case CHANGE_PROFILE_BIO: {
      return {
        ...state,
        profileBio: action.value,
      };
    }
    case CHANGE_PROFILE_PORTFOLIO: {
      return {
        ...state,
        profilePortfolio: action.value,
      };
    }
    case CHANGE_PROFILE_PASSWORD: {
      return {
        ...state,
        profilePassword: action.value,
      };
    }
    case CHANGE_PROFILE_NEW_PASSWORD: {
      return {
        ...state,
        profileNewPassword: action.value,
      };
    }
    case CHANGE_PROFILE_NEW_PASSWORD_CONFIRM: {
      return {
        ...state,
        profileNewPasswordConfirm: action.value,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
