import React            from 'react';
import Header           from './common/Header';
import Sidebar          from './common/Sidebar';
import {Route, Switch}  from 'react-router-dom';

import DashboardLink    from './dashboard/DashboardLink';
import AccountsLink     from './accounts/AccountsLink';
import './HomePage.scss';

class HomePage extends React.Component{
    
    constructor(props){
        super(props);
        
        console.log('~~~~~~~~~~~~~~~~~~~~ >>> HomePage <<< ~~~~~~~~~~~~~~~~~~~~');
        console.log(this.props.location.pathname);
    }
    
    componentDidMount(){
        this.props.getDashboardHomeLinkBean();
    }
    
    render(){
        return(
            <div className="d-flex flex-column">
                <Header />
                <div className="app-body">
                    <Sidebar activeNavLink={this.props.location.pathname} />
                    <main id="homePageId">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item"><a href="#">Admin</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div className="container-fluid">
                            <Switch>
                                <Route path="/probudget/home/dashboard"    exact   component={DashboardLink} />
                                <Route path="/probudget/home/accounts"     exact   component={AccountsLink} />
                                
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
    
}

export default HomePage;