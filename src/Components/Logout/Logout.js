
import React, { useContext, useState }  from 'react'
import {useHistory} from 'react-router-dom';
import {LoginContext} from '../Login/LoginContext'
import {connect} from 'react-redux'

function Logout(props) {
    const [login,setLogin]=useContext(LoginContext);
    const history=useHistory();
    //==============Logout========================
    const logout=()=>{
        console.log("logging out");
        props.dispatch({
            type:"setLoggedIn",
            payload:false
        })
        
        history.push("/")
    }
    
    
    return(
        <>
        <button onClick={logout}>Logout</button>
        </>
    )
    
}
const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
  });
export default connect(mapStateToProps)(Logout)
