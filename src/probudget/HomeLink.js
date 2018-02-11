import { connect }      from 'react-redux'
import HomePage         from './HomePage'
import * as dashboardHomeLinkAction  from './../store/actions/DashboardHomeLinkAction';

const mapStateToProps = (state, ownProps) => {
    console.log('~~~~~~~~~~~~~~~~~~~ >>> HomeLink <---> mapStateToProps <<< ~~~~~~~~~~~~~~~~~~~', state);
    return {
      dashboardHomeLinkBean:state.dashboardHomeLinkBean
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDashboardHomeLinkBean:()=>{
        console.log('~~~~~~~~~~~~~~~~~~~ >>> HomeLink <---> getDashboardHomeLinkBean <<< ~~~~~~~~~~~~~~~~~~~');
        dispatch(dashboardHomeLinkAction.getDashboardHomeLinkBean());
    }
  }
}

const HomeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomeLink