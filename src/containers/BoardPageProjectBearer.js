import { connect } from 'react-redux';
import BoardPageProjectBearer from 'src/components/BoardPageProjectBearer';
import { getProfileData } from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProfileData: () => {
    const action = getProfileData();
    dispatch(action)
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPageProjectBearer);
