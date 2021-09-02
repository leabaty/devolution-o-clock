import { connect } from "react-redux";
import SearchPageDisconnect from "src/components/SearchPageDisconnect";
import { changeProjectValue, getSearchProject } from "src/actions";

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state) => ({
  projects: state.search.projects,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputSearch: (value) => {
    const action = changeProjectValue(value);
    dispatch(action);
  },
  submitSearchInput: (value) => {
    const action = getSearchProject(value);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageDisconnect);
