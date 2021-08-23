import axios from 'axios';
import { GET_LAST_PROJECTS, saveLastProjects } from 'src/actions';

const projects= (store) => (next) => (action) => {
  switch (action.type) {
    case GET_LAST_PROJECTS: {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://devolution-api.herokuapp.com/api/v1/projects');
          // à partir de là on a notre réponse et on va pouvoir stocker les données
          // sinon on aura une erreur et on passera dans le "catch"
          // on va donc créer une action qui sera traiter dans le reducer
          // pour modifier la valeur de recipes.list
          console.log(response.data)
          const actionSaveProjects = saveLastProjects(response.data);
          store.dispatch(actionSaveProjects);
        }
        catch (error) {
          console.log(error);
        }
      };

      fetchData();
      break;
    }
    default:
      next(action);
  }
};

export default projects;
