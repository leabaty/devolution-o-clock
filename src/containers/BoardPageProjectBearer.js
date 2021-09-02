import { connect } from 'react-redux';
import BoardPageProjectBearer from 'src/components/BoardPageProjectBearer';
import { getProfileData, getAllProjects } from 'src/actions';

const mapStateToProps = (state) => ({
  myProjects: state.user.dataUser.projects
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfileData: () => {
    const action = getProfileData();
    dispatch(action)
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPageProjectBearer);
