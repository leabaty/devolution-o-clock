import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { getAllProjects } from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state, ownProps) => ({
  projects:state.project.list
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  lastProjectsLoading: () => {
    const action = getAllProjects();
    dispatch(action)
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
