import React        from 'react';
import Header       from './../common/Header';
import Sidebar      from './../common/Sidebar';
import './HomePage.scss';

class HomePage extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.getDashboardHomeLinkBean();
    }
    
    render(){
        return(
            <div className="d-flex flex-column">
                <Header />
                <div className="app-body">
                    <Sidebar />
                    <main id="homePageId">
                        <ol className="breadcrumb">
                            <li class="breadcrumb-item">Home</li>
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div>
                            <h2>This is main</h2>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
    
}

export default HomePage;