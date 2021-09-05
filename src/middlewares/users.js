import axios from "axios";
import instance from "./utils/instance";

import {
  SIGN_UP_SUBMIT,
  SIGN_IN_SUBMIT,
  saveUser,
  GET_PROFILE_DATA,
  saveProfileData,
  GET_SEARCH_USER,
  GET_ALL_USERS,
  saveUsers,
  MODIFY_PROFILE_SUBMIT,
} from "src/actions";

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_UP_SUBMIT: {
      const { firstname, lastname, pseudo, email, password, confirmPassword } =
        store.getState().login;
      const newUser = {
        firstname: firstname,
        lastname: lastname,
        pseudo: pseudo,
        email: email,
        password: password,
        repeat_password: confirmPassword,
      };
      const createUser = async () => {
        try {
          const response = await axios.post(
            "https://devolution-api.herokuapp.com/api/v1/user/create",
            newUser
          );
        } catch (error) {
          console.log(error);
        }
      };

      createUser();
      break;
    }

    case SIGN_IN_SUBMIT: {
      const { signInEmail, signInPassword } = store.getState().login;
      instance({
        method: "POST",
        url: "/login",
        data: {
          login: signInEmail,
          password: signInPassword,
        },
      })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("token", response.data.accessToken);

            instance.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;

            const actionSaveUser = saveUser(response.data);

            store.dispatch(actionSaveUser);
            action.value.push("/profile");
          }
        })
        .catch((error) => console.log(error));
      break;
    }

    case GET_PROFILE_DATA: {
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: "/me",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const dataProfile = response.data;
          const actionSaveProfileData = saveProfileData(dataProfile);
          store.dispatch(actionSaveProfileData);
        })
        .catch((error) => console.log(error));
      break;
    }

    case GET_ALL_USERS: {
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: "/users",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const Users = response.data;
          const actionSaveUsers = saveUsers(Users);
          store.dispatch(actionSaveUsers);
        })
        .catch((error) => console.log(error));
      break;
    }

    case GET_SEARCH_USER: {
      const { inputSearchUser } = store.getState().search;
      const token = localStorage.getItem("token");
      instance({
        method: "GET",
        url: `/users/${inputSearchUser}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const Users = response.data;
          const actionSaveUserData = saveUsers(Users);
          store.dispatch(actionSaveUserData);
          action.value.push("/search/users");
        })
        .catch((error) => console.log(error));
      break;
    }

    case MODIFY_PROFILE_SUBMIT: {
      const {} = store.getState(
        profileSubtitle,
        profileStatus,
        profileFirstname,
        profileLastname,
        profilePhone,
        profileEmail,
        profileCity,
        profileDribble,
        profileLinkedIn,
        profileGitHub,
        profileBio,
        profilePortfolio,
        profilePassword,
        profileNewPassword,
        profileNewPasswordConfirm
      ).user;

      const token = localStorage.getItem("token");

      instance({
        method: "PUT",
        url: "/user/:id",
        data: {
          email: profileEmail,
          password: profileNewPassword,
          // image_url :
          description: profileBio,
          user_status: profileStatus,
          user_function: profileSubtitle,
          lastname: profileLastname,
          firstname: profileFirstname,
          phone: profilePhone,
          city: profileCity,
          linkedin: profileLinkedIn,
          portfolio: profilePortfolio,
          // twitter :
          github: profileGitHub,
          facebook: profileDribble,
          // experience :
        },

        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          action.value.push("/profile");
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default users;
