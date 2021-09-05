import { connect } from "react-redux";
import SearchPageDisconnect from "src/components/SearchPageDisconnect";
import { getAllProjects } from "src/actions";

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
