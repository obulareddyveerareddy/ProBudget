import React    from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import LoginPage from './auth/LoginPage';

class PortfolioRouter extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
    <Switch>
      <Route path="/"     exact   component={LoginPage} />
    </Switch>
    );
  }

}

export default PortfolioRouter;