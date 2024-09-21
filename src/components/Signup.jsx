import React, { useContext, useState } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Signup() {

    const [username , setUserName] = useState("");
    const [password , setPassword] = useState("");

    const {signup , loading} = useContext(AuthContext)


    const handleSignup = async () => {
      
        if(!username || !password){
          console.log("please fill the dtails")
          return
        }

        if(username && password){
          await signup(username , password)
          console.log("user registered")
        }
    }

  return (
    <Box display = "flex"
         flexDir="column"
         gap = "20px"
         alignItems="center"
    >
        <Text fontSize = "1.5rem" >Signup Page</Text>
        <Input placeholder='Enter username' 
        value = {username} onChange={(e) => setUserName(e.target.value)}></Input>
        <Input placeholder='Enter Password' value = {password} onChange={(e) => setPassword(e.target.value)}></Input>
        <Button onClick = {handleSignup} disabled = {loading}>
          {loading ? "signup..." : "Signup"}
        </Button>
        <Text>Already have an account
        <Link to = "/login">Login</Link>
      </Text>
    </Box>
  )
}

export default Signup