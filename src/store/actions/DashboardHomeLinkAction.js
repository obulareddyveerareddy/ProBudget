import * as actionTypes from './../actiontypes/ActionTypes';

export function getDashboardHomeLinkBean(){
    console.log('~~~~~~~~~~~~~~~~~~~ >>> DashboardHomeLinkAction <---> getDashboardHomeLinkBean <<< ~~~~~~~~~~~~~~~~~~~');
    return {type:actionTypes.FETCH_DASHBOARD_HOME_LINK_BEAN}
}