import { connect } from "react-redux";
import SearchProjectsResult from 'src/components/SearchProjectsResult';

import { addProjectToParticipations, deleteProjectFromParticipations } from "src/actions";
import { findProject } from 'src/selectors/projects';

const mapStateToProps = (state, ownProps) => {
  return{
    project: findProject(state.search.projects, Number(ownProps.match.params.id)),
    idProject: Number(ownProps.match.params.id),
    myProjects: state.user.dataUser.participated_projects,
  }
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjectsResult);