import { connect } from "react-redux";
import SearchPageDisconnect from "src/components/SearchPageDisconnect";
import { getAllProjects } from "src/actions";

const mapStateToProps = (state) => ({
    projects: state.project.list,
    loading: state.project.loading,
  logged: state.user.logged,
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
