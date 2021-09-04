import { SAVE_ALL_PROJECTS } from "src/actions";

export const initialState = {
  loading: true,
  list: [],
};

const projectReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_PROJECTS:
      return {
        ...state,
        list: action.projects,
        loading: false,
      };
    default:
      return state;
  }
};

export default projectReducer;
