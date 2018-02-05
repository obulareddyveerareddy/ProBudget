import React  from 'react';
import $      from 'jquery';
import './Common.scss';

class Header extends React.Component {
  
  constructor(props){
    super(props);
    
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  
  toggleSidebar(event){
    console.log('~~~~~~~~~~~~~~~~~ toggleSidebar(.) ~~~~~~~~~~~~~~~~~');
    $( "#sidebarCollapse" ).animate({width: 'toggle'});
    event.preventDefault();
  }
  
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top app-header">
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand" href="#"></a>
          <button className="sidebar-toggler ml-auto" type="button" onClick={this.toggleSidebar}>
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div class="d-flex flex-row justify-content-end ml-auto mr-3">
              <div class="d-flex flex-column mr-3 nav-icon-link">
                <label><i class="fa fa-plus"></i> ADD</label>
              </div>
              <div class="d-flex flex-column mr-3 nav-icon-link">
                <label><i class="fa fa-upload"></i> Upload</label>
              </div>
              <div class="d-flex flex-column mr-3 nav-icon-link">
                <label><i class="fa fa-download"></i> Download</label>
              </div>
              <div class="d-flex flex-column mr-3 nav-icon-link">
                <label><i class="fa fa-sign-out"></i></label>
              </div>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;