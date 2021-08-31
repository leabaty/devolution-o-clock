import axios from 'axios';
import instance from './utils/instance';

import { GET_ALL_PROJECTS, saveAllProjects, GET_SEARCH_PROJECT, PROJECT_SUBMIT } from 'src/actions';

const projects= (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS: {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://devolution-api.herokuapp.com/api/v1/projects');
          // à partir de là on a notre réponse et on va pouvoir stocker les données
          // sinon on aura une erreur et on passera dans le "catch"
          // on va donc créer une action qui sera traiter dans le reducer
          // pour modifier la valeur de recipes.list
          console.log(response.data)
          const actionSaveProjects = saveAllProjects(response.data);
          store.dispatch(actionSaveProjects);
        }
        catch (error) {
          console.log(error);
        }
      };
      fetchData();
      break;
    }
    case GET_SEARCH_PROJECT: {
      const {inputSearchProject} = store.getState().search
      console.log(inputSearchProject)
      const token = localStorage.getItem('token')
      instance({
        method: 'GET',
        url: `/projects/${inputSearchProject}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
          .then((response) => {
            const Projects = response.data;
            console.log('dataProject', response.data)
            const actionSaveProjects = saveAllProjects(response.data);
            store.dispatch(actionSaveProjects);
            action.value.push('/search/projects')
          })
          .catch((error) => console.log(error));
        break;
      }

      case PROJECT_SUBMIT: {
        const {projectTitle, projectStatus, projectStartDate, projectDescription, projectNeeds, projectSpecificities} = store.getState().projectform
        const newProject = {
          projectTitle: name,
          projectStatus: project_status,
          projectStartDate: beginning_date,
          projectDescription: project_description,
          projectNeeds: need_of_the_project,
          // projectImage: icone,
          // projectSpecificities:
      };
        const createProject = async () => {
          try {
            const response = await axios.post('https://devolution-api.herokuapp.com/api/v1/user/create', newProject);
            console.log(response)
          }
          catch (error) {
            console.log(error);
          }
        };
  
        createProject();
        break;
      }

    default:
      next(action);
  }
};

export default projects;
