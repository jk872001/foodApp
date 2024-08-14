/* eslint-disable react/prop-types */
import { useState } from "react"
import AuthContext from "./AuthContext"

const AuthProvider = ({children}) => {
    const [userName,setUserName] = useState("")
    const [isAuthenticated,setIsAuthenticated] = useState(false)


    const login =(data)=>{
      setIsAuthenticated(true)
       setUserName(data)
    }

    const logout =()=>{
      setIsAuthenticated(false)
       setUserName("")
    }
  return (

    <AuthContext.Provider value={{isAuthenticated,userName,login,logout}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider