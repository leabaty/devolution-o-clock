import {
  CHANGE_FIELD_VALUE
} from 'src/actions';

// les valeurs par défaut sont stockées dans le state initial
const initialState = {
  messages: [],
  pseudo: 'Anonyme',
  newMessage: '',
  isOpen: true,
  email: 'acidman@herocorp.io',
  password: 'fructis',
  loginError: false,
  isConnected: false,
};

// fonction qui traduit une intention/action en changement de state
// mission principale => RETOURNE TOUJOURS UN STATE
const reducer = (state = initialState, action = {}) => {
  // en fonction de la propriété type de l'action
  // on va retourner un state changer ou pas
  switch (action.type) {
    case CHANGE_FIELD_VALUE: {
      return {
        ...state,
        // ici on vient changer dynamiquement la propriété du state
        // celle-ci sera fonction de la valeur stockée dans action.key
        [action.key]: action.value,
      };
    }

    default:
      return state;
  }
};

export default reducer;
