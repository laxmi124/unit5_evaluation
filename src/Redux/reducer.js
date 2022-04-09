import {IS_LOGIN} from './action';
import {SET_USER_DETAILS} from './action';

export const reducer = (store={setUserDetails:{},isLogin:false},{payload,type}) => {

    switch(type){
        case IS_LOGIN:
            return{
                ...store,
                isLogin:payload
            }
        case SET_USER_DETAILS:
            return{
                ...store,
                setUserDetails:payload
            }

            default:
                return store
    }
}