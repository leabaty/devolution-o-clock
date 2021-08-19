import { connect } from 'react-redux';

import SignUp from 'src/components/Login/SignUp';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = {
/*changeUserName* => action qui permet de récupérer la value de l'event.target. 
Fonction avec callback, paramètre event.target.value
*/ 
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
