import React, { useState } from "react";
import "./Header.styles.css";
import PropTypes from "prop-types"

function Header({onNavClick}) {

  
  return (
    <div className="header">
      <div className="header-bar">
        <h1>BlogIt</h1>

        <div className="nav">
          
          <button type="button" onClick={() => onNavClick("home")}>
            Home
          </button>
          <button type="button" onClick={() => onNavClick("createNew")}>
            Create New
          </button>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  onNavClick: PropTypes.func.isRequired
};

export default Header;