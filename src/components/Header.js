import React from "react";
import PropTypes from "prop-types";

import AngleLeft from "react-icons/lib/fa/angle-left";
import AngleRight from "react-icons/lib/fa/angle-right";
import DoubleDown from "react-icons/lib/fa/angle-double-down";

import Background from "../images/Background.png";
import Mouse from "../images/mouse.png";
import ArrowDown from "../images/arrow_down.png";

const Header = props => {
  return (
    <header
      style={{
        backgroundImage: `url(${props.projectImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <h2>{props.projectName}</h2>
      <div className="slider-buttons">
        <button
          className="buttons-right-left"
          onClick={() => {
            props.nextProject("left");
          }}
        >
          <AngleLeft className="arrows" />
        </button>
        <button className="button-header">View Case</button>
        <button
          className="buttons-right-left"
          onClick={() => {
            props.nextProject("right");
          }}
        >
          <AngleRight className="arrows" />
        </button>
      </div>
      <button className="button-down" onClick={props.scrollDown}>
        <DoubleDown className="arrowDown" />
        <img src={Mouse} className="mouse" />
        <img src={ArrowDown} className="mouse-down" />
      </button>
    </header>
  );
};

Header.propTypes = {
  projectImage: PropTypes.string,
  projectName: PropTypes.string,
  nextProject: PropTypes.func,
  scrollDown: PropTypes.func
};

export default Header;
