export const IS_LOGIN = 'IS_LOGIN';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';

export const isLogin=(payload)=>({
    type:IS_LOGIN,
    payload
})
export const setUser=(payload)=>({
    type:SET_USER_DETAILS,
    payload
})