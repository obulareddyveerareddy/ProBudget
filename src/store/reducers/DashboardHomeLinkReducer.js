import * as actionTypes from './../actiontypes/ActionTypes';

export default function getDashboardHomeLinkBean(state = {}, action){
    switch(action.type){
        case actionTypes.SUCCESS_DASHBOARD_HOME_LINK_BEAN:
            console.log('~~~~~~~~~~~~~~~~~~~ >>> DashboardHomeLinkReducer <---> getDashboardHomeLinkBean <<< ~~~~~~~~~~~~~~~~~~~',action);
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}