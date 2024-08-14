import { createContext } from "react";



const AuthContext = createContext({
    isAuthenticated:false,
    userName:"",
    login:()=>{},
    logout:()=>{},

})

export default AuthContext