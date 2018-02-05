import * as actionTypes from './../actiontypes/ActionTypes';

export function checkLoginSession(payload){
    console.log('~~~~~~~~~~~~~~~~~~~ >>> AuthLoginLinkAction <---> checkLoginSession <<< ~~~~~~~~~~~~~~~~~~~', payload);
    return { type: actionTypes.CHECK_SESSION, payload};
}
