import {
  CHANGE_NAME_VALUE,
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
  CHANGE_PASSWORD_CONFIRM_VALUE,
} from 'src/actions';

// les valeurs par défaut sont stockées dans le state initial
const initialState = {
  messages: [],
  pseudo: '',
  newMessage: '',
  isOpen: true,
  email: '',
  password: '',
  loginError: false,
  isConnected: false,
};

// fonction qui traduit une intention/action en changement de state
// mission principale => RETOURNE TOUJOURS UN STATE
const reducer = (state = initialState, action = {}) => {
  // en fonction de la propriété type de l'action
  // on va retourner un state changer ou pas
  switch (action.type) {
    case CHANGE_NAME_VALUE: {
      return {
        ...state,
        // ici on vient changer dynamiquement la propriété du state
        // celle-ci sera fonction de la valeur stockée dans action.key
        pseudo: action.value,
      };
    }
    case CHANGE_EMAIL_VALUE: {
      return {
        ...state,
        // ici on vient changer dynamiquement la propriété du state
        // celle-ci sera fonction de la valeur stockée dans action.key
        email: action.value,
      };
    }
    case CHANGE_PASSWORD_VALUE: {
      return {
        ...state,
        // ici on vient changer dynamiquement la propriété du state
        // celle-ci sera fonction de la valeur stockée dans action.key
        password: action.value,
      };
    }
    case CHANGE_PASSWORD_CONFIRM_VALUE: {
      return {
        ...state,
        // ici on vient changer dynamiquement la propriété du state
        // celle-ci sera fonction de la valeur stockée dans action.key
        // pseudo: action.value,
      };
    }

    default:
      return state;
  }
};

export default reducer;
