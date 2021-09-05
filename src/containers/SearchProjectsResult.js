import { connect } from "react-redux";
import SearchProjectsResult from "src/components/SearchProjectsResult";

import {
  addProjectToParticipations,
  deleteProjectFromParticipations,
  deleteProjectFromCreations,
  modifyProject,
  getProfileData,
  getAllProjects,
  getAllUsers,
} from "src/actions";
import { findProject } from "src/selectors/projects";

const mapStateToProps = (state, ownProps) => {
  return {
    project: findProject(state.project.list, Number(ownProps.match.params.id)),
    idProject: Number(ownProps.match.params.id),
    myParticipatedProjects: state.user.dataUser.participated_projects,
    myUserId: state.user.dataUser.id,
    projectOwners: state.project.owners,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clickParticipationButton: (id, history) => {
    const action = addProjectToParticipations(id, history);
    dispatch(action);
  },

  clickUnparticipationButton: (id, history) => {
    const action = deleteProjectFromParticipations(id, history);
    dispatch(action);
  },

  clickDeleteButton: (id, history) => {
    const action = deleteProjectFromCreations(id, history);
    dispatch(action);
  },

  clickModifyProjectButton: (id, history) => {
    const action = modifyProject(id, history);
    dispatch(action);
  },

  fetchProfileData: () => {
    const action = getProfileData();
    dispatch(action);
  },

  getProjects: () => {
    const action = getAllProjects();
    dispatch(action);
  },

  getUsers: () => {
    const action = getAllUsers();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProjectsResult);
