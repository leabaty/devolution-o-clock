import { connect } from 'react-redux';
import SignUp from 'src/components/Login/SignUp';
import { changeFieldValue } from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state, ownProps) => ({
  // ici on récupère la valeur contenu dans la props "name"
  // et on la passe à noter accesseur de propriété
  value: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInputValue: (value) => {
    const action = changeFieldValue(ownProps.name, value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
