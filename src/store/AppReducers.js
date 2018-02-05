import {combineReducers}        from 'redux';
import authLoginLinkBean        from './reducers/AuthLoginLinkReducer';
import dashboardHomeLinkBean    from './reducers/DashboardHomeLinkReducer';

const rootReducer = combineReducers({
    authLoginLinkBean, dashboardHomeLinkBean
});

export default rootReducer;