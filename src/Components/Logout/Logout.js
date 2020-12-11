
import React, { useContext, useState }  from 'react'
import {useHistory} from 'react-router-dom';
import {LoginContext} from '../Login/LoginContext'

function Logout({setIsLoggedIn}) {
    const [login,setLogin]=useContext(LoginContext);
    const history=useHistory();
    //==============Logout========================
    const logout=()=>{
        console.log("logging out");
        
        setLogin(false)
        history.push("/")
    }
    
    
    return(
        <>
        <button onClick={logout}>Logout</button>
        </>
    )
    
}

export default Logout
