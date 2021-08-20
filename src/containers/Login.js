import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeNameValue, changeEmailValue, changePasswordValue, changePasswordConfirmValue} from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state, ownProps) => ({
  // ici on récupère la valeur contenu dans la props "name"
  // et on la passe à noter accesseur de propriété
  //value: state[ownProps.name],
  name: state.user.pseudo,
  email: state.user.email,
  password: state.user.password
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputNameValue: (value) => {
    console.log(ownProps.name)
    const action = changeNameValue(value);
    dispatch(action);
  },
  changeInputEmailValue: (value) => {
    const action = changeEmailValue(value);
    dispatch(action);
  },
  changeInputPasswordValue: (value) => {
    const action = changePasswordValue(value);
    dispatch(action);
  },
  changeInputPasswordConfirmValue: (value) => {
    const action = changePasswordConfirmValue(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
