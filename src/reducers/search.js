import { CHANGE_PROJECT_VALUE, CHANGE_USER_VALUE, SAVE_ALL_USERS, SAVE_ALL_PROJECTS            } from '../actions';

export const initialState = {
  inputSearchProject: '',
  inputSearchUser: '',
  users:[],
  projects:[]
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROJECT_VALUE: {
      return{
        ...state,
        inputSearchProject: action.value
      }
    }
    case CHANGE_USER_VALUE: {
      return{
        ...state,
        inputSearchUser: action.value
      }
    }
    case SAVE_ALL_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SAVE_ALL_PROJECTS:
        return {
          ...state,
          projects: action.projects,
        };
    default:
      return state;
  }
};

export default searchReducer;
