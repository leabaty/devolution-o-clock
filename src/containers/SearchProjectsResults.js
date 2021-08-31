import { connect } from "react-redux";
import { getSearchProject, changeProjectValue } from "src/actions";

import SearchProjectsResults from "src/components/SearchProjectsResults";

const mapStateToProps = (state) => ({
  projects: state.search.projects,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchProjects: (value) => {
    const action = changeProjectValue(value);
    dispatch(action);
  },
  submitSearchProjects: (value) => {
    const action = getSearchProject(value);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProjectsResults);
