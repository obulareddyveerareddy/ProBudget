import {take, put, call, apply} from 'redux-saga/effects';

export function* fetchLoggedInUserProfile(){
    try{
        console.log(':::::::::::> fetchLoggedInUserProfile() triggered <::::::::::::');
        yield take('FETCH_USERPROFILE');
        console.log("userProfile");
    }catch(error){
        yield put({type: 'FETCH_USERPROFILEFAILED', error});
    }
}