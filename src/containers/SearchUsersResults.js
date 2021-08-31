import { connect } from "react-redux";

import SearchUsersResults from "src/components/SearchUsersResults";

import {
  changeUserValue,
  getSearchUser,
  getAllUsers,
} from "src/actions";

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state) => ({
    users: state.search.users
});

const mapDispatchToProps = (dispatch) => ({

//   changeInputUserValue: (value) => {
//     const action = changeUserValue(value);
//     dispatch(action);
//   },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsersResults);