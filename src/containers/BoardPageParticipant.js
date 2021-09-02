import { connect } from 'react-redux';
import BoardPageParticipant from 'src/components/BoardPageParticipant';
import { getProfileData, getAllProjects } from 'src/actions';

const mapStateToProps = (state) => ({
  projects: state.user.dataUser.participated_projects
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfileData: () => {
    const action = getProfileData()
    dispatch(action)
  },

  getProjects: () => {
    const action = getAllProjects();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPageParticipant);
