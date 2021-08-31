import { connect } from 'react-redux';
import ProjectForm from 'src/components/ProjectForm';

import { 
  projectSubmitForm, 
  changeProjectTitleValue, 
  changeProjectStatusValue, 
  changeProjectStartDateValue, 
  changeProjectDescriptionValue, 
  changeProjectNeedsValue 
  // changeProjectSpecificitiesValue, 
  // changeProjectImageValue,
} from 'src/actions';


const mapStateToProps = (state, ownProps) => ({
  projectTitle: state.projectform.projectTitle,
  projectStatus: state.projectform.projectStatus,
  projectStartDate: state.projectform.projectStartDate,
  projectDescription: state.projectform.projectDescription,
  projectNeeds: state.projectform.projectNeeds,
  // projectSpecificities: state.projectform.projectSpecificities,
  // projectImage: state.projectform.projectImage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  validateprojectSubmitForm: (value) => {
    const action = projectSubmitForm(value);
    dispatch(action);
  },
  changeInputProjectTitleValue: (value) => {
    const action = changeProjectTitleValue(value);
    dispatch(action);
  },
  changeSelectProjectStatusValue: (value) => {
    const action = changeProjectStatusValue(value);
    dispatch(action);
  },
  changeDateProjectStartDateValue: (value) => {
    const action = changeProjectStartDateValue(value);
    dispatch(action);
  },
  changeInputProjectDescriptionValue: (value) => {
    const action = changeProjectDescriptionValue(value);
    dispatch(action);
  },
  changeInputProjectNeedsValue: (value) => {
    const action = changeProjectNeedsValue(value);
    dispatch(action);
  },
  // changeInputProjectSpecificitiesValue: () => {
  //   const action = changeProjectSpecificitiesValue();
  //   dispatch(action);
  // },
  // changeInputProjectImageValue: () => {
  //   const action = changeProjectImageValue();
  //   dispatch(action);
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
