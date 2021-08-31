import { connect } from "react-redux";

import SearchProjectsResults from "src/components/SearchProjectsResults";

const mapStateToProps = (state) => ({
    projects: state.search.projects
});

const mapDispatchToProps = (dispatch) => ({

//   changeInputUserValue: (value) => {
//     const action = changeUserValue(value);
//     dispatch(action);
//   },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjectsResults);
