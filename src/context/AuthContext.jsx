import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

export function AuthContextProvider({children}){
    const [isAuth,setAuth] = useState(false);
    let [token,setToken] = useState('')
    // const navigate = useNavigate();

    function logIn(){
        setAuth(true)
        // navigate('/')
    }
    function logOut(){
        setAuth(false)
        // navigate('/LogIn')
    }

    return (
        <AuthContext.Provider value={{isAuth,logIn,logOut,token,setToken}}>{children}</AuthContext.Provider>
    )
}