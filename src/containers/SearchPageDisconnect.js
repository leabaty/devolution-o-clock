import { connect } from "react-redux";
import SearchPageDisconnect from "src/components/SearchPageDisconnect";
import { getAllProjects } from "src/actions";

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state) => ({
    projects:state.project.list
});

const mapDispatchToProps = (dispatch) => ({

  getProjects: () => {
    const action = getAllProjects();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageDisconnect);
