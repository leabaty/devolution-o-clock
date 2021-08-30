import { CHANGE_PROJECT_VALUE, CHANGE_USER_VALUE, SAVE_ALL_USERS } from '../actions';

export const initialState = {
  inputSearchProjet: '',
  inputSearchUser: '',
  users:[],
  projects:[]
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROJECT_VALUE: {
      return{
        ...state,
        inputSearchProjet: action.value
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
    default:
      return state;
  }
};

export default searchReducer;
