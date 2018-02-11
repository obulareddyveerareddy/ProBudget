import {take, put, call}     from 'redux-saga/effects';
import * as authLoginLinkApi    from './../apis/AuthLoginLinkApi'

export function* getUserRecordSignIn(){
    try{
        const { payload } = yield take('USER_RECORD_SIGNIN');
        console.log('~~~~~~~~~~~~~~~~~~~ >>> AuthLoginLinkSaga <---> getUserRecordSignIn <<< ~~~~~~~~~~~~~~~~~~~',payload);
        let response = yield call(authLoginLinkApi.getUserRecordSignIn, payload);
        console.log(response);
        yield put({type: 'USER_RECORD_SIGNIN_SUCCESS', response});
    }catch(error){
        yield put({type: 'USER_RECORD_SIGNIN_FAILURE', error});
    }
}