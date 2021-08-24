import axios from 'axios';
import instance from './utils/instance';
import { SIGN_UP_SUBMIT, SIGN_IN_SUBMIT, saveUser, CHECK_TOKEN } from 'src/actions';


const users= (store) => (next) => (action) => {
  switch (action.type) {
    
    case SIGN_UP_SUBMIT: {
      const {firstname, lastname, pseudo, email, password, confirmPassword} = store.getState().user
      const newUser = {
        firstname: firstname,
        lastname: lastname,
        pseudo: pseudo,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    };
      const createUser = async () => {
        try {
          const response = await axios.post('https://devolution-api.herokuapp.com/api/v1/user/create', newUser);
          console.log(response)
        }
        catch (error) {
          console.log(error);
        }
      };

      createUser();
      break;
    }

    case SIGN_IN_SUBMIT: {
      const {signInEmail, signInPassword} = store.getState().user

      api({
        method: 'POST',
        url: '/login',
        data: {
          login: signInEmail,
          password: signInPassword,
        },
      })
        .then((response) => {
          // ici on vient stocker le token dans localStorage
          localStorage.setItem('token', response.data.accessToken);

          // on en profite pour venir le stoker aussi dans l'instance d'axios
          // comme ça on l'aura à chaque requête !!
          instance.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;

          // ici on veut stocker dans le state les infos du user
          // donc on va faire un dispatch d'action
          const actionSaveUser = saveUser(response.data);

          // on passe par la fonction disaptch du store
          store.dispatch(actionSaveUser);
        })
        .catch((error) => console.log(error));
      break;
    }

    case CHECK_TOKEN: {
      // on récupère le token stocké dans le localStorage
      const token = localStorage.getItem('token');

      // s'il existe on fait notre requête API pour vérifier sa validité
      if (token) {
        instance.get('/users', {
          // on oublie pas d'embarquer le token avec la requête
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            // ici le token est bon, donc on peut le stocker dans l'insance
            instance.defaults.headers.common.authorization = `Bearer ${token}`;

            // en cas de réponse on sauvegarde le user dans le state
            // avec la même action que pour le login
            const payload = { ...response.data };
            const actionSaveUser = saveUser(payload);
            store.dispatch(actionSaveUser);
          })
          .catch((error) => console.log(error));
      }
      break;
    }
    default:
      next(action);
  }
};

export default users;
