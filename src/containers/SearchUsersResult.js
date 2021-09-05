import { connect } from "react-redux";
import SearchUsersResult from 'src/components/SearchUsersResult';

import { findUser } from 'src/selectors/users';

const mapStateToProps = (state, ownProps) => {
  return{
    user: findUser(state.search.users, Number(ownProps.match.params.id)),
    logged: state.user.logged,
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsersResult);
