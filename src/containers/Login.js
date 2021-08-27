import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeFirstnameValue, 
  changeLastnameValue, 
  changeUsernameValue, 
  changeEmailValue, 
  changePasswordValue, 
  changePasswordConfirmValue, 
  signUpSubmit, 
  signInSubmit,
  changeSignInEmailValue,
  changeSignInPasswordValue, 
} from 'src/actions';

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state, ownProps) => ({
  // ici on récupère la valeur contenu dans la props "name"
  // et on la passe à noter accesseur de propriété
  //value: state[ownProps.name],
  firstname: state.login.firstname,
  lastname: state.login.lastname,
  username: state.login.pseudo,
  email: state.login.email,
  password: state.login.password,
  confirmPassword: state.login.confirmPassword,
  signInEmail: state.login.signInEmail,
  signInPassword: state.login.signInPassword,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputFirstnameValue: (value) => {
    const action = changeFirstnameValue(value);
    dispatch(action);
  },
  changeInputLastnameValue: (value) => {
    const action = changeLastnameValue(value);
    dispatch(action);
  },
  changeInputUsernameValue: (value) => {
    const action = changeUsernameValue(value);
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
  formSignUpSubmit: () => {
    const action = signUpSubmit();
    dispatch(action);
  },
  formSignInSubmit: (value) => {
    const action = signInSubmit(value);
    dispatch(action);
  },
  changeSignInInputEmailValue: (value) => {
    const action = changeSignInEmailValue(value);
    dispatch(action);
  },
  changeSignInInputPasswordValue: (value) => {
    const action = changeSignInPasswordValue(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
