import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { getLastProjects } from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state, ownProps) => ({
  // ici on récupère la valeur contenu dans la props "name"
  // et on la passe à noter accesseur de propriété

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  lastProjectsLoading: () => {
    const action = getLastProjects();
    dispatch(action)
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
