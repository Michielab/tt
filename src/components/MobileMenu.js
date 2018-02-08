import React from "react";
import PropTypes from "prop-types";

const MobileMenu = props => {
  return (
    <div className="mobile-menu-container">
      <ul className="mobile-menu-links">
        <li
          onClick={() => {
            props.mobileRedirect("");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            props.mobileRedirect("people");
          }}
        >
          People
        </li>
        <li
          onClick={() => {
            props.mobileRedirect("contact");
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

MobileMenu.propTypes = {
  showMobileMenu: PropTypes.func
};

export default MobileMenu;
