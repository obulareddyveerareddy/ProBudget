import fetch    from 'cross-fetch';

export function getUserRecordSignIn(params){
    console.log('~~~~~~~~~~~~~~~~~~~ >>> AuthLoginLinkApi <---> getUserRecordSignIn - 1 <<< ~~~~~~~~~~~~~~~~~~~', params);
    console.log('~~~~~~~~~~~~~~~~~~~ >>> /api/auth/find/user <---> ',params);
    return fetch('/api/auth/find/user',  {
    	method: 'post',
    	body: JSON.stringify(params)
    });
}