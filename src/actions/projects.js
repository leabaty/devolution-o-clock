export const GET_PROJECTS = 'GET_PROJECTS';

export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';

export const createGetProjectsAction = () => ({
    type: GET_PROJECTS,
  });
  
  export const createGetProjectsSuccessAction = (projects) => ({
    type: GET_PROJECTS_SUCCESS,
    projects: projects,
  });
  