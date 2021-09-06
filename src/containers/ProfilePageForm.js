import { connect } from 'react-redux';
import ProfilePageForm from 'src/components/ProfilePageForm';
import { getAllSkills, deleteSkill, addSkill } from 'src/actions';

const mapStateToProps = (state) => ({
    userData : state.user.dataUser,
    loading: state.user.loading,
    logged: state.user.logged,
    skills:  state.skills
});

const mapDispatchToProps = (dispatch) => ({
  allSkills: () => {
    const action = getAllSkills();
    dispatch(action);
  },

  handleDeleteSkill: (id) => {
    const action = deleteSkill(id);
    dispatch(action);
  },

  handleAddSkill: (id) => {
    const action = addSkill(id);
    dispatch(action);
  },

});


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageForm);
