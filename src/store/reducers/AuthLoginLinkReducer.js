import * as actionTypes from './../actiontypes/ActionTypes';

export default function checkLoginSession(state = {}, action){
    switch(action.type){
        case actionTypes.CHECK_SESSION:
            console.log('~~~~~~~~~~~~~~~~~~~ >>> AuthLoginLinkReducer <---> checkLoginSession <<< ~~~~~~~~~~~~~~~~~~~',action);
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}