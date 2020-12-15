import React, { useContext, useState } from 'react'
import './Login.styles.css'
import {useHistory} from 'react-router-dom'
import withLogin from './withLogin'
import {connect} from 'react-redux'

function Login(props) {
  const history=useHistory();
  const [formData, setFormData] = useState({
        name: "shamli",
        password: "abc"
      });
  const { Username, password } = formData;
  //=================Login Submit Function===========================
    function handleFormSubmit(e) {
        e.preventDefault();
        props.dispatch({
          type: "setLoggedIn",
          payload: true,
        })
        history.push("/")

      }
//========================InputChange Function=======================
      function handleInputChange({ target }) {
        const { Username, value } = target;
        setFormData({ ...formData, [Username]: value });
      }
    return (
        <>
        <div className="container">
          <div className="login"><h1>Login</h1></div>
          
        <form className="create-new" onSubmit={handleFormSubmit}>
        <div className="control-wrapper">
          <label>User Name</label>
          <input
            name="name"
            type="text"
            value={Username}
            onChange={handleInputChange}
            required
           
          />
        </div>
        <div className="control-wrapper">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            required
            
          />
        </div>
        <button type="Submit">Submit</button>
        </form>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});
export default connect(mapStateToProps)(Login)
