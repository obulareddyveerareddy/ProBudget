import React        from 'react';
import $            from 'jquery';
import firebase     from 'firebase';
import './LoginPage.scss';

class LoginPage extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
      email:'',
      password:''
    }
    
    this.userRecordSignIn = this.userRecordSignIn.bind(this);
    
  }
  
  userRecordSignIn(){
    this.props.userRecordSignIn(this.state);
  }
  
  componentWillReceiveProps(nextProps){
    console.log('~~~~~~~~~~~~~~~~~~~ >>> LoginPage <---> componentWillReceiveProps <<< ~~~~~~~~~~~~~~~~~~~', nextProps);
    this.props.history.push('/probudget/home/dashboard');
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
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event)=>this.setState({email:event.target.value})} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event)=>this.setState({password:event.target.value})} />
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.userRecordSignIn}>Submit</button>
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