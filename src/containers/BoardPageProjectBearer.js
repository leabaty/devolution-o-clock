import { connect } from 'react-redux';
import BoardPageProjectBearer from 'src/components/BoardPageProjectBearer';
import { getProfileData, getAllProjects } from 'src/actions';

const mapStateToProps = (state) => ({
  myProjects: state.user.dataUser.projects,
  loading: state.user.loading,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchProfileData: () => {
    const action = getProfileData();
    dispatch(action)
  },

  getProjects: () => {
    const action = getAllProjects();
    dispatch(action);
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPageProjectBearer);
