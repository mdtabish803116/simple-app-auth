import { createContext, useState } from "react"
import { loginApi, signupApi } from "../services/api";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading , setLoading] = useState(false)
    const [loggedInUser , setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")) || "")
    
    const signup = async (username , password) => {
        
        setLoading(true)
           try{
           const userName = await signupApi(username, password)
           return {success: true , data : userName}
           }catch(err){
            console.log(err)
            return {success: false , data : err.message}
           }finally{
            setLoading(false)
           }
    }

    const login = async (username , password) => {
        setLoading(true)
        try{
            const userName = await loginApi(username , password)
            localStorage.setItem("loggedInUser" , JSON.stringify(userName))
            setLoggedInUser(userName)
            return {success: true , data : userName}
        }catch(err){
            return {success: false , data : err.message}
        }finally{
            setLoading(false)
        }
    }

    const logout = () => {
        localStorage.removeItem("loggedInUser")
        setLoggedInUser("");
    }

    return (
        <AuthContext.Provider value = {{signup , loading , loggedInUser , login , logout}}>
             {children}
        </AuthContext.Provider>
    )
}