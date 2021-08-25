import { SAVE_USER, SAVE_PROFILE_DATA } from '../actions';

export const initialState = {
    firstname:'',
    lastname:'',
    email:'',
    pseudo: '',
    logged: false,
  };
  
  const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_USER: {
        const { firstname, lastname, email, pseudo } = action.payload;
        return {
          ...state,
          firstname: firstname,
          lastname: lastname,
          email: email,
          pseudo: pseudo,
          logged : true,
        };
      }
      case SAVE_PROFILE_DATA: {
        const { firstname, lastname, email, pseudo } = action.dataProfile;
        return {
          ...state,
          firstname: firstname,
          lastname: lastname,
          email: email,
          pseudo: pseudo,
          logged : true,
        };
      }
      default:
        return state;
    }
  };
  
  export default userReducer;
  

