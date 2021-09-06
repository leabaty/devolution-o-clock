import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar';
import {logout, cleanLocalStorage} from 'src/actions'

// quand on a un container, à l'instanciation on peut lui passer des props (cf Settings)
// ces props de configuration seront accessibles via le 2e paramètre de mSTP ou mDTP
const mapStateToProps = (state) => ({
    logged: state.user.logged
});

const mapDispatchToProps = (dispatch) => ({
    setLogout: () => {
        const action = logout();
        dispatch(action);
    },
    cleanLs: () => {
        const action = cleanLocalStorage();
        dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
