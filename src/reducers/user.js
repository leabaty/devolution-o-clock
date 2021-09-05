import { SAVE_USER, SAVE_PROFILE_DATA } from "../actions";

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
    case SAVE_PROFILE_DATA: {
      const { findUser, findProject } = action.dataProfile;
      return {
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
