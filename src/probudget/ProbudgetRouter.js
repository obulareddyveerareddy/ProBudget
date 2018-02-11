import React    from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import LoginLink      from './auth/LoginLink';
import HomeLink       from './HomeLink'

class PortfolioRouter extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
    <Switch>
      <Route path="/"                   exact   component={LoginLink} />
      <Route path="/probudget/home/*"   exact   component={HomeLink} />
    </Switch>
    );
  }

}

export default PortfolioRouter;