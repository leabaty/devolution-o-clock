import {
  
} from 'src/actions';

export const initialState = {
    list: [],
// ça crée un tableau vide pour le stockage des projets lors de la requête
  };
  
  const projectReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      // case SAVE_ALL_PROJECTS:
      //   return {
      //     ...state,
      //     list: action.projects,
      //   };
      default:
        return state;
    }
  };
  
  export default projectReducer;
  