import { Box, Button, Input, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [username , setUserName] = useState("");
    const [password , setPassword] = useState("");

    const {loggedInUser , login , loading} = useContext(AuthContext);

    const navigation = useNavigate()

    const handleLogin = async() => {

        if(username && password){
            let res = await login(username , password)
           navigation("/")
        }
    }

    useEffect(()=> {
        if(loggedInUser){
            navigation("/")
        }
    })
 
  return (
    <Box display = "flex"
    flexDir="column"
    gap = "20px"
    alignItems="center"
>
   <Text fontSize = "1.5rem" >Login Page</Text>
   <Input placeholder='Enter username' 
   value = {username} onChange={(e) => setUserName(e.target.value)}></Input>
   <Input placeholder='Enter Password' value = {password} onChange={(e) => setPassword(e.target.value)}></Input>
   <Button onClick = {handleLogin} disabled = {loading}>
     {loading ? "Login..." : "Login"}
   </Button>
   <Text>New user
   <Link to = "/signup">signup</Link>
   </Text>
</Box>
  )
}

export default Login