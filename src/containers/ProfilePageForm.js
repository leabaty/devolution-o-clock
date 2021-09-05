import { connect } from 'react-redux';
import ProfilePageForm from 'src/components/ProfilePageForm';

const mapStateToProps = (state) => ({
    userData : state.user.dataUser,
    loading: state.user.loading,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({

  });


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageForm);
