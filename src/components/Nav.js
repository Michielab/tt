import React from "react";
import Fabars from "react-icons/lib/fa/bars";
import Close from "../images/close.png";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <div className="nav">
      {props.mobileMenu === true ? (
        <img src={Close} className="close" onClick={props.showMobileMenu} />
      ) : (
        <Fabars className="menu" onClick={props.showMobileMenu} />
      )}
      <div className="logo-container">
        <span className="logo">TT</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/people">
            People
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

Nav.propTypes = {
  mobileMenu: PropTypes.bool,
  showMobileMenu: PropTypes.func
};

export default Nav;
