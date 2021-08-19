import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignUp from 'src/components/SignUp';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = {

};

// une enveloppe (HoC) qui parle a redux
const container = connect(mapStateToProps, mapDispatchToProps)(SignUp);

// autour de cette enveloppe, une seconde qui parle a react-router
const containerWithRouter = withRouter(container);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default containerWithRouter;
