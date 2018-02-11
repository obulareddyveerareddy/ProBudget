import * as actionTypes from './../actiontypes/ActionTypes';

export default function checkLoginSession(state = {}, action){
    switch(action.type){
        case actionTypes.CHECK_SESSION:
            console.log('~~~~~~~~~~~~~~~~~~~ >>> AuthLoginLinkReducer <---> CHECK_SESSION <<< ~~~~~~~~~~~~~~~~~~~',action);
            return Object.assign({}, action.payload);
        case actionTypes.USER_RECORD_SIGNIN_SUCCESS:
            console.log('~~~~~~~~~~~~~~~~~~~ >>> AuthLoginLinkReducer <---> USER_RECORD_SIGNIN_SUCCESS <<< ~~~~~~~~~~~~~~~~~~~',action);
            return Object.assign({}, action.response);
        default:
            return state;
    }
}