import { connect } from 'react-redux';
import ProfilePage from 'src/components/ProfilePage';
import { getProfileData } from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state) => ({
  userData : state.user
});

const mapDispatchToProps = (dispatch) => ({
  profileData: () => {
    const action = getProfileData()
    dispatch(action)
  },
  // toto: () => {
  //   const action = loadProfileData()
  //   dispatch(action)
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);


