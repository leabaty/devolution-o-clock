import {
  CHANGE_PROJECT_TITLE,
  CHANGE_PROJECT_STATUS,
  CHANGE_PROJECT_START_DATE,
  CHANGE_PROJECT_DESCRIPTION,
  CHANGE_PROJECT_NEEDS,
  // CHANGE_PROJECT_SPECIFICITIES,
  // CHANGE_PROJECT_IMAGE,
} from 'src/actions';

// les valeurs par défaut sont stockées dans le state initial
const initialState = {
  projectTitle: '',
  projectStatus: '',
  projectStartDate: '',
  projectDescription: '',
  projectNeeds: '',
  // projectSpecificities:'',
  // projectImage:''
};

// fonction qui traduit une intention/action en changement de state
// mission principale => RETOURNE TOUJOURS UN STATE
const reducer = (state = initialState, action = {}) => {
  // en fonction de la propriété type de l'action
  // on va retourner un state changer ou pas
  switch (action.type) {
    case CHANGE_PROJECT_TITLE: {
      return {
        ...state,
        projectTitle: action.value,
      };
    }
    case CHANGE_PROJECT_STATUS: {
      return {
        ...state,
        projectStatus: action.value,
      };
    }
    case CHANGE_PROJECT_START_DATE: {
      return {
        ...state,
        projectStartDate: action.value,
      };
    }
    case CHANGE_PROJECT_DESCRIPTION: {
      return {
        ...state,
        projectDescription: action.value,
      };
    }
    case CHANGE_PROJECT_NEEDS: {
      return {
        ...state,
        projectNeeds: action.value,
      };
    }
    // case CHANGE_PROJECT_SPECIFICITIES: {
    //   return {
    //     ...state,
    //     projectSpecificities: action.value,
    //   };
    // }
    // case CHANGE_PROJECT_IMAGE: {
    //   return {
    //     ...state,
    //     projectImage: action.value,
    //   };
    // }
    default:
      return state;
  }
};

export default reducer;
