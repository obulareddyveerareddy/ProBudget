import React        from 'react';
import $            from 'jquery';
import './Common.scss';

class Sidebar extends React.Component {
    
  render() {
    return (
        <div id="sidebarCollapse" className="sidebar sidebar-show">
            <nav className="sidebar-nav">
                <ul className="nav mt-1">
                    <li className="nav-item">
                        <a className="nav-link" href="main.html">
                            <i className="fa fa-calculator"></i> Dashboard 
                            <span><i className="fa fa-chevron-right fa-5x"></i></span>
                        </a>
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
                        <a className="nav-link" href="main.html">
                            <i className="fa fa-university"></i> Accounts 
                            <span><i className="fa fa-chevron-right fa-5x"></i></span>
                        </a>
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
        </div>
    );
  }
}

export default Sidebar;