import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.styles.css";
import Logout from "../Logout/Logout";

function Header(props) {
  return (
    <div className="header">
      <div className="header-bar">
        <h1>BlogIt</h1>

        <div className="nav">
          {/*================Home===================== */}
          <Link className="links" to="/">
            Home
          </Link>
          {props.isLoggedIn ? (
            <>
              <Link className="links" to="/create">
                Create New
              </Link>
              {/*================Logout===================== */}
              <Logout />
            </>
          ) : (
            <>
              {/*================Login===================== */}
              <Link className="links" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Header);
