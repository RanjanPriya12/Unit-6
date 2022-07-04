
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Login from './Login';
function Protected({children}){

    const isAuth = useSelector(store => store.authStore.isAuth);
     console.log(isAuth);
    if(isAuth){
        return children;
    }
    return <Navigate to={"/login"} />
}

export default Protected;