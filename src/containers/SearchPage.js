import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';
import { changeProjectValue, changeUserValue, getSearchProject, getSearchUser, getAllProjects, getAllUsers } from 'src/actions';

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