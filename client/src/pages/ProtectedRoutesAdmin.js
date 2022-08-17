
import { Outlet , Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const ProtectedRoutesAdmin = () => {
   
    const {isAuth,userInfo} = useSelector((state)=>state?.user);
    console.log(userInfo)
    return isAuth && userInfo.role ==='admin' ? <Outlet/> : <Navigate to='/login'/>
    
};

export default ProtectedRoutesAdmin ;