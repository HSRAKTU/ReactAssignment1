import { createContext, useState } from "react";
import { userLogin, userSignIn, saveUser } from "../apis";


export const AuthContext = createContext(null)

function AuthProvider({ children }){
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const login = ({email,password}) => {
        //console.log("AuthProvider->",email,password)
        const data = userLogin({email,password})
        //console.log(data)
        if(data.password === password){
            setUser({email, password})
            return true;
        }else{
            setError("Invalid Credentials.")
            return false;
        }
    }

    const signin = ({name,email,password}) =>{
        //console.log('AuthProvider-->',name,email,password)
        if(!userSignIn({name,email,password})){
            setError("user already exists!")
            return false;
        }else{
            setUser({name,email,password})
            return true;
        }
    }
    const saveChanges = ({name,email,password}) => {
        if(saveUser({name,email,password})){
           return true
        }
    }

    const logout = () => {}
    return (
    <AuthContext.Provider value={{error, user, login, signin, logout, saveChanges}}>
        {children}
    </AuthContext.Provider>
    )
}


export default AuthProvider