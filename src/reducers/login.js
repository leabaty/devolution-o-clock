import {
  CHANGE_FIRSTNAME_VALUE,
  CHANGE_LASTNAME_VALUE,
  CHANGE_USERNAME_VALUE,
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
  CHANGE_PASSWORD_CONFIRM_VALUE,
  CHANGE_SIGN_IN_EMAIL_VALUE,
  CHANGE_SIGN_IN_PASSWORD_VALUE
} from 'src/actions';

// les valeurs par défaut sont stockées dans le state initial
const initialState = {
  firstname: '',
  lastname: '',
  pseudo: '',
  email: '',
  password: '',
  confirmPassword:'',
  signInEmail:'',
  signInPassword:''
};

// fonction qui traduit une intention/action en changement de state
// mission principale => RETOURNE TOUJOURS UN STATE
const reducer = (state = initialState, action = {}) => {
  // en fonction de la propriété type de l'action
  // on va retourner un state changer ou pas
  switch (action.type) {
    case CHANGE_FIRSTNAME_VALUE: {
      return {
        ...state,
        // ici on vient changer dynamiquement la propriété du state
        // celle-ci sera fonction de la valeur stockée dans action.key
        firstname: action.value,
      };
    }
    case CHANGE_LASTNAME_VALUE: {
      return {
        ...state,
        // ici on vient changer dynamiquement la propriété du state
        // celle-ci sera fonction de la valeur stockée dans action.key
        lastname: action.value,
      };
    }
    case CHANGE_USERNAME_VALUE: {
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
        confirmPassword: action.value,
      };
    }
    case CHANGE_SIGN_IN_EMAIL_VALUE: {
      return {
        ...state,
        signInEmail:action.value
      };
    }
    case CHANGE_SIGN_IN_PASSWORD_VALUE: {
      return {
        ...state,
        signInPassword:action.value
      };
    }
    default:
      return state;
  }
};

export default reducer;
