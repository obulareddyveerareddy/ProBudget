import React from 'react';
import './Common.scss';

class FinInstitutionsDropdown extends React.Component{
    
    render(){
        return(
          
            <div className="btn-group" id="finInstitutionsDropdownId">
              <button type="button" className="btn dropdown-toggle col-12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Financial Institution
              </button>
              <div className="dropdown-menu col-12">
                <div className="row" style={{overflow:'auto', height:'20rem'}}>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row">
                                <div className="d-flex flex-row m-2" style={{flex:'100%', border: '1px solid #dee2e6'}}>
                                    <img src="https://i.pinimg.com/564x/5b/88/d4/5b88d48dd381991a56b867ff6661a0de.jpg" className="img-thumbnail" alt="Axis Bank" style={{maxHeight:'3rem'}} />
                                    <div className="text-muted text-uppercase font-weight-bold font-xs m-2">Axis Bank</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row">
                                <div className="card">
                                    <div className="card-body p-0 clearfix">
                                        <i className="fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left"></i>
                                        <div className="h5 text-danger mb-0 pt-3">Axis Bank</div>
                                        <div className="text-muted text-uppercase font-weight-bold font-xs">India</div>
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

export default FinInstitutionsDropdown;