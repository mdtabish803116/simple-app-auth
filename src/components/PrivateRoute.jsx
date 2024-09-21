import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {

    const {loggedInUser} = useContext(AuthContext)

 return loggedInUser ? children : <Navigate to = "/login"/>
 
}

export default PrivateRoute 