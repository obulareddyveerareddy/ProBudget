import React                    from 'react';
import FinInstitutionsDropdown  from './../common/FinInstitutionsDropdown';

class AccountsPage extends React.Component{
    
    constructor(props){
        super(props);
        console.log('~~~~~~~~~~~~~~~~~~~~ >>> AccountsPage <<< ~~~~~~~~~~~~~~~~~~~~');
        
        this.state = {
            configAccounts:[]
        }
        
        this.addNewAccount = this.addNewAccount.bind(this);
    }
    
    addNewAccount(event){
        console.log('~~~~~~~~~~~~~~~~ >> AccountsPage : addNewAccount');
        let sample = this.state.configAccounts;
        sample.push({id:1, name:'Savings', balance:10000});
        this.setState({configAccounts:sample});
        console.log(this.state.configAccounts);
        //event.preventDefault();
    }
    
    render(){
        return(
            <div className="d-flex flex-column">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">Accounts</div>
                            <div className="card-body">
                                <table className="table table-hover table-bordered">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Balance</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.configAccounts.map((item, i)=>{
                                                return <tr key={i}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.balance}</td>
                                                    <td></td>
                                                </tr>
                                            })
                                        }
                                        <tr>
                                            <td colSpan="2">Total</td>
                                            <td>$1.999,50</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header bg-warning">Manage Account (Add, Edit & Delete)</div>
                            <div className="card-body">
                                <form>
                                  <div className="form-group">
                                    <label htmlFor="accountType">Account Type</label>
                                    <select className="form-control" id="accountType">
                                        <option></option>
                                        <option>Cash</option>
                                        <option>Credit Card</option>
                                        <option>Current</option>
                                        <option>Savings</option>
                                    </select>
                                    <small id="accountTypeHelp" className="form-text text-muted">Select account type.</small>
                                  </div>
                                  <div className="form-group">
                                    <div className="d-flex flex-column">
                                        <FinInstitutionsDropdown />
                                        <small id="accountTypeHelp" className="form-text text-muted">Select respective financial institution.</small>
                                    </div>
                                  </div>
                                  <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default AccountsPage;