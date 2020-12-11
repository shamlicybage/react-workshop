import React, { useContext } from "react";
import {Link} from 'react-router-dom';

import "./Header.styles.css";
import Logout from '../Logout/Logout'
import { LoginContext } from "../Login/LoginContext";




function Header() {
  const [isLoggedIn,setLogin]=useContext(LoginContext)
  return (
    <div className="header">
      <div className="header-bar">
        <h1>BlogIt</h1>

        <div className="nav">
          {/*================Home===================== */}
        <Link className="links" to="/">Home</Link>
        {isLoggedIn ? (
          <>
            <Link className="links" to="/create">Create New</Link>
            {/*================Logout===================== */}
            <Logout login={isLoggedIn}/>
          </>
            
          ) : (
            <>
            {/*================Login===================== */}
            <Link className="links" to="/login">Login</Link>
            </>
          )}
         </div>
      </div>
    </div>
  );
}


export default Header;