import {take, put, call, apply, select}     from 'redux-saga/effects';
import * as dashboardHomeLinkApi    from './../apis/DashboardHomeLinkApi'

export function* getDashboardHomeLinkBean(){
    try{
        yield take('FETCH_DASHBOARD_HOME_LINK_BEAN');
        console.log('~~~~~~~~~~~~~~~~~~~ >>> DashboardHomeLinkSaga <---> getDashboardHomeLinkBean <<< ~~~~~~~~~~~~~~~~~~~');
        const authLoginLinkBean = yield select(state => state.authLoginLinkBean);
        let payload = yield call(dashboardHomeLinkApi.getDashboardHomeLinkBean, authLoginLinkBean);
        console.log(payload);
        yield put({type: 'SUCCESS_DASHBOARD_HOME_LINK_BEAN', payload});
    }catch(error){
        yield put({type: 'FAILURE_DASHBOARD_HOME_LINK_BEAN', error});
    }
}