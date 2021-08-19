import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Project from 'src/components/Project';

import { findProject } from 'src/selectors/projects';

const mapStateToProps = (state, ownProps) => ({
  project: findProject(state.projects.list, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

// une enveloppe (HoC) qui parle a redux
const container = connect(mapStateToProps, mapDispatchToProps)(Project);

// autour de cette enveloppe, une seconde qui parle a react-router
const containerWithRouter = withRouter(container);

export default containerWithRouter;
