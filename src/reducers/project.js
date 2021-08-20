export const initialState = {
    list: [],
// ça crée un tableau vide pour le stockage des projets lors de la requête
  };
  
  const projectReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_PROJECTS_SUCCESS':
        return {
          ...state,
          list: action.projects,
          // ça va chercher les projets et ça les met dans le tableau
        };
      default:
        return state;
    }
  };
  
  export default projectReducer;
  