import { LOGIN, LOGOUT } from './actions';

const initState = JSON.parse(localStorage.getItem("todo-auth")) || {
    isAuth:false,
    auth_token:null
};
export const authReducer = (store = initState,{type,payload}) => {
    switch(type){
        case LOGIN:
            return {isAuth:true,auth_token:payload}
        case LOGOUT:
            return {isAuth:false,auth_token:payload};
        default:
            return store;
    }   
}