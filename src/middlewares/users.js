import axios from 'axios';
import instance from './utils/instance';
import { SIGN_UP_SUBMIT, SIGN_IN_SUBMIT } from 'src/actions';


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

        const signInUser = {
            login: signInEmail,
            password: signInPassword,
        };

        const fetchUserData = async () => {

          try {
            const response = await axios.post('https://devolution-api.herokuapp.com/api/v1/login', signInUser);
            console.log(response.data.accessToken)

            localStorage.setItem('token', response.data.accessToken);

            // on en profite pour venir le stoker aussi dans l'instance d'axios
            // comme ça on l'aura à chaque requête !!

            const instance = axios.create({
              baseURL : 'https://devolution-api.herokuapp.com/api/v1',
            })

            console.log(instance.defaults)

            instance.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;

            // ici on veut stocker dans le state les infos du user
            // donc on va faire un dispatch d'action
            const actionSaveUser = saveUser(response.data);

            // on passe par la fonction disaptch du store
            store.dispatch(actionSaveUser);

          }
          catch (error) {
            console.log(error);
          }
        };
  
        fetchUserData();
        break;
      }
    
    default:
      next(action);
  }
};

export default users;
