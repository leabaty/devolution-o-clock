import { SAVE_USER, SAVE_PROFILE_DATA } from '../actions';

export const initialState = {
    logged: false,
    dataUser:[],
    projectUser:[]
  };
  
  const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_USER: {
        return {
          ...state,
          // firstname: firstname,
          // lastname: lastname,
          // email: email,
          // pseudo: pseudo,
          logged : true,
        };
      }
      case SAVE_PROFILE_DATA: {
        const { findUser, findProject } = action.dataProfile;
        return {
          dataUser: findUser,
          projectUser: [findProject],
          logged : true,
        };
      }
      default:
        return state;
    }
  };
  
  export default userReducer;
  

