import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Button } from '@chakra-ui/react'

function Navbar() {

    const {loggedInUser , logout} = useContext(AuthContext)

  return (
    <div style = {{display: "flex", justifyContent:"space-between" , height : "50px"}}>
           <h2>Welocome , {loggedInUser}</h2>
           <div>
                <Button>Light</Button>
                <Button onClick = {logout}>Logout</Button>
           </div>
    </div>
  )
}

export default Navbar