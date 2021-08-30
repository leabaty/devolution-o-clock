import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';
import { changeProjectValue, changeUserValue, getSearchProject, getSearchUser, getAllProjects, getAllUsers } from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    changeInputProjectValue: (value) => {
        const action = changeProjectValue(value);
        dispatch(action);
    },
    changeInputUserValue: (value) => {
        const action = changeUserValue(value);
        dispatch(action);
    },
    searchProjectSubmit: (value) => {
        const action = getSearchProject(value);
        dispatch(action);
    },
    searchUserSubmit: (value) => {
        const action = getSearchUser(value);
        dispatch(action);
    },

    searchAllProjectsSubmit: () => {
        dispatch(getAllProjects());
    },

    searchAllUsersSubmit: () => {
        const action = getAllUsers();
        dispatch(action);
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);