import { SAVE_USER, SAVE_PROFILE_DATA, LOGOUT } from "../actions";

export const initialState = {
  loading: true,
  logged: false,
  dataUser: [],
  projectUser: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER: {
      return {
        ...state,
        logged: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        logged: false,
      };
    }
    case SAVE_PROFILE_DATA: {
      const { findUser, findProject } = action.dataProfile;
      return {
        ...state,
        dataUser: findUser,
        projectUser: findProject,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
