import React        from 'react';
import $            from 'jquery';
import {Link}       from 'react-router-dom';
import './Common.scss';

class Sidebar extends React.Component {
    
    constructor(props){
        super(props)
        console.log('~~~~~~~~~~~~~~~~~~ >>> Sidebar <<< ~~~~~~~~~~~~~~~~');
        console.log(this.props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        
    }
    
    toggleSidebar(){
        if($( "#sidebarCollapse" ).width() < 50){
            $( "#sidebarCollapse" ).animate({width: '220px'});
        }else{
            $( "#sidebarCollapse" ).animate({width: '50px'});
        }
        event.preventDefault();
    }
    
    render() {
        return (
            <div id="sidebarCollapse" className="sidebar sidebar-show">
                <div className="d-flex flex-column" style={{flex: 'auto'}}>
                    <nav className="sidebar-nav">
                        <ul className="nav mt-1">
                            <li className="nav-item">
                                <Link to="/probudget/home/dashboard" className={`${this.props.activeNavLink.indexOf('dashboard') > 0 ? 'nav-link active' : 'nav-link'}`} href="main.html">
                                    <i className="fa fa-calculator"></i> Dashboard 
                                    <span><i className="fa fa-chevron-right fa-5x"></i></span>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">
                                    <i className="fa fa-flag"></i> Reports 
                                    <span><i className="fa fa-chevron-right fa-5x"></i></span>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">
                                    <i className="fa fa-bar-chart"></i> Budgets 
                                    <span><i className="fa fa-chevron-right fa-5x"></i></span>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">
                                    <i className="fa fa-line-chart"></i> Forecast 
                                    <span><i className="fa fa-chevron-right fa-5x"></i></span>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/probudget/home/accounts" className={`${this.props.activeNavLink.indexOf('accounts') > 0 ? 'nav-link active' : 'nav-link'}`} href="main.html">
                                    <i className="fa fa-university"></i> Accounts 
                                    <span><i className="fa fa-chevron-right fa-5x"></i></span>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">
                                    <i className="fa fa-calendar-check-o"></i> Reminders 
                                    <span><i className="fa fa-chevron-right fa-5x"></i></span>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">
                                    <i className="fa fa-tags"></i> Tags 
                                    <span><i className="fa fa-chevron-right fa-5x"></i></span>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">
                                    <i className="fa fa-address-book-o"></i> Contacts 
                                    <span><i className="fa fa-chevron-right fa-5x"></i></span>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">
                                    <i className="fa fa-users"></i> Groups 
                                    <span><i className="fa fa-chevron-right fa-5x"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button className="btn mt-auto bg-success" id="collapseLink" onClick={this.toggleSidebar}><i className="fa fa-chevron-left"></i></button>
                </div>
            </div>
        );
    }
}

export default Sidebar;