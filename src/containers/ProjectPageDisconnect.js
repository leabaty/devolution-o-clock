import { connect } from 'react-redux';
import ProjectPageDisconnect from 'src/components/ProjectPageDisconnect';
import { getAllProjects } from 'src/actions';

import { findProject } from 'src/selectors/projects';
// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP

const mapStateToProps = (state, ownProps) => ({
    project: findProject(state.project.list, Number(ownProps.match.params.id)),
});

const mapDispatchToProps = (dispatch) => ({
  lastProjectsLoading: () => {
    const action = getAllProjects();
    dispatch(action)
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPageDisconnect);