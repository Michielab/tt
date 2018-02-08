import React from "react";
import PropTypes from "prop-types";

const Feed = props => {
  return (
    <div className="feed">
      <div className="img-container">
        <img src={props.stream} className="img-feed" />
      </div>
      <div className="text-container">
        <p className="text-feed">{props.text}</p>
      </div>
    </div>
  );
};

Feed.propTypes = { stream: PropTypes.string, text: PropTypes.string };

export default Feed;
