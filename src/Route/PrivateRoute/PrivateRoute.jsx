import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contaxt/AuthProvider';

function PrivateRoute({children}) {
     const {user,isLoding} = useContext(AuthContext)
     const location = useLocation();
     if(isLoding){
          return<p>Loading...</p>
     }
     if(!user){
          return <Navigate to='/signIn' state={{from: location}} replace></Navigate>
       }

       return children
}

export default PrivateRoute