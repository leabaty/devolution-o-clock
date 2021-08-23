import axios from 'axios';
import { SIGN_UP_SUBMIT } from 'src/actions';

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
    default:
      next(action);
  }
};

export default users;
