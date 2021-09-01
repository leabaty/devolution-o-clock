import { connect } from "react-redux";
import SearchProjectsResult from 'src/components/SearchProjectsResult';

import { findProject } from 'src/selectors/projects';

const mapStateToProps = (state, ownProps) => {
  return{
    project: findProject(state.search.projects, Number(ownProps.match.params.id))
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjectsResult);

