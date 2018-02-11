import React        from 'react';
import $            from 'jquery';
import firebase     from 'firebase';
import './LoginPage.scss';

class LoginPage extends React.Component{

  constructor(props){
    super(props);
    
    this.googleSignin       = this.googleSignin.bind(this);
    firebase.auth().getRedirectResult().then(function(result) {
        console.log('~~~~~~~~~~~~~~~~~~~ >>> LoginPage <---> constructor <<< ~~~~~~~~~~~~~~~~~~~');
        if(result.credential){
            props.checkLoginSession(result);
        }
        return result;
    }).catch(function(error) {
        props.checkLoginSession(error);
    });
    
  }
  
  googleSignin(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  
  componentWillReceiveProps(nextProps){
    console.log('~~~~~~~~~~~~~~~~~~~ >>> LoginPage <---> componentWillReceiveProps <<< ~~~~~~~~~~~~~~~~~~~', nextProps);
    if(nextProps.authLoginLinkBean.user){
      this.props.history.push('/probudget/home/dashboard');
    }
  }
  
  render(){
    return(
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4" style={{padding:'0px'}}>
              <div className="card card-body">
                <div className="d-flex flex-column">
                <h1 className="text-center">Pro-Budget</h1>
                <div className="about-pro-budget"></div>
                <div className="d-flex flex-column justify-content-end">
                  <button type="button" className="btn btn-googleplus btn-lg" onClick={this.googleSignin}><i className="fa fa-google-plus fa-fw"></i> Google+</button>
                </div>
                <p className="text-muted">Sign In to your account via google</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{padding:'0px'}}>
              <div className="card card-body text-center text-white bg-primary" style={{backgroundColor:'transparent', minHeight: '100%'}}>
                <div>
                  <p>Pro-Budget  personal finance software is the perfect solution for managing your finances. You can organize your cash flow, expenses and bank accounts in one place. And easy to understand charts and graphs enable you to visualize how you’re spending your money month-to-month. This enables you to track your progress, discover where you can make savings and improve how you manage your money.</p>
                <div className="row pull-right">
                  <div className="col-6">
                    <button type="button" className="btn btn-warning"><i className="fa fa-info-circle"></i> More info!!</button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;