export const initialState = {
    list: [],
  };
  
  const projectReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_PROJECTS_SUCCESS':
        return {
          ...state,
          list: action.projects,
        };
      default:
        return state;
    }
  };
  
  export default projectReducer;
  