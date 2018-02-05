import { connect }      from 'react-redux'
import LoginPage        from './LoginPage'
import * as authAction  from './../../store/actions/AuthLoginLinkAction';

const mapStateToProps = (state, ownProps) => {
  console.log('~~~~~~~~~~~~~~~~~~~ >>> LoginLink <---> mapStateToProps <<< ~~~~~~~~~~~~~~~~~~~', state);
  return {
    authLoginLinkBean:state.authLoginLinkBean
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkLoginSession:(params)=>{
        console.log('~~~~~~~~~~~~~~~~~~~ >>> LoginLink <---> checkLoginSession <<< ~~~~~~~~~~~~~~~~~~~');
        dispatch(authAction.checkLoginSession(params));
    }
  }
}

const LoginLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginLink