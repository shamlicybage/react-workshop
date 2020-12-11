import React from 'react'
import {LoginContext} from './LoginContext'

const WithLogin=(ChildComponent) =>(props)=>{
    return (
        <LoginContext.Consumer>
            {(value)=><ChildComponent setLogin={value[1]} isLoggedIn={value[0]}{...props}/>}
        </LoginContext.Consumer>
    );
};

export default WithLogin