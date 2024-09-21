
import { Navigate, Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./components/login"
import Signup from "./components/signup"
import Books from "./components/Books"
import PrivateRoute from "./components/PrivateRoute"

function App() {

  return (
     <Routes>
        <Route path = "/" element = {<Navigate to = {"/books"}/>}></Route>
        <Route path = "/books" element = {
          <PrivateRoute>
              <Books/>
          </PrivateRoute>
          }></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/signup" element = {<Signup />}></Route>
     </Routes>
  )
}

export default App
