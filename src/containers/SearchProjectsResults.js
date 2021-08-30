import { connect } from "react-redux";

import SearchProjectsResults from "src/components/SearchProjectsResults";

import {

} from "src/actions";

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
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
