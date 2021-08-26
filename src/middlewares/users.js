import axios from 'axios';
import instance from './utils/instance';


import { SIGN_UP_SUBMIT, SIGN_IN_SUBMIT, saveUser, GET_PROFILE_DATA, LOAD_PROFILE_DATA, saveProfileData} from 'src/actions';


const users= (store) => (next) => (action) => {
  switch (action.type) {
    
    case SIGN_UP_SUBMIT: {
      const {firstname, lastname, pseudo, email, password, confirmPassword} = store.getState().login
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

      const {signInEmail, signInPassword} = store.getState().login
      instance({
        method: 'POST',
        url: '/login',
        data: {
          login: signInEmail,
          password: signInPassword,
        },
      })
        .then((response) => {
            console.log(response)
            if(response.data.accessToken) {
              //si on a un token, on vient le stocker le token dans localStorage
              localStorage.setItem('token', response.data.accessToken);
              
              // on en profite pour venir le stoker aussi dans l'instance d'axios
              // comme ça on l'aura à chaque requête !!
              instance.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
              // ici on veut stocker dans le state les infos du user
              // donc on va faire un dispatch d'action
              console.log(response.data)
              const actionSaveUser = saveUser(response.data);
              
              // on passe par la fonction disaptch du store
              store.dispatch(actionSaveUser);

            }
          })
        .catch((error) => console.log(error));

      break;
    }

    case GET_PROFILE_DATA: {
      const token = localStorage.getItem('token')
      console.log("CONSOLE LOG TOKEN": token)
      instance({
        method: 'GET',
        url: '/me',
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
          .then((response) => {
            // en cas de réponse on sauvegarde le user dans le state
            // avec la même action que pour le login
            const dataProfile = response.data;
            console.log('dataProfile', response.data)
            const actionSaveProfileData = saveProfileData(dataProfile);
            store.dispatch(actionSaveProfileData);
          })
          .catch((error) => console.log(error));
        break;
      }

    default:
      next(action);
  }
}

export default users;
