import React        from 'react';

class DashboardPage extends React.Component{
    
    constructor(props){
        super(props);
        console.log('~~~~~~~~~~~~~~~~~~~~ >>> DashboardPage <<< ~~~~~~~~~~~~~~~~~~~~');
    }
    
    render(){
        return(
            <div className="d-flex flex-column">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body p-0 clearfix">
                                <i className="fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left"></i>
                                <div className="h5 text-danger mb-0 pt-3">$1.999,50</div>
                                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default DashboardPage;