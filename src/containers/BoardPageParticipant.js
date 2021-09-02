import { connect } from 'react-redux';
import BoardPageParticipant from 'src/components/BoardPageParticipant';
import { getProfileData, getAllProjects } from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProfileData: () => {
    const action = getProfileData();
    dispatch(action)
  },
  searchAllProjects: () => {
    dispatch(getAllProjects());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPageParticipant);
