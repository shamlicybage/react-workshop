import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import "./Card.styles.css";

function renderContent(type, content) {
  if (type === "text") {
    return <div className="card-text">{content}</div>;
  } else {
    return <img className="image" src={content} alt="" />;
  }
}

function Card({ data }) {
  const { content, type, user } = data;

  return (
    <div className="BlogCard">
      <div className="Head">
      <Avatar {...user} />
      </div>
      <div className="card-body">
      {/* {renderContent(type, content)} */}
      {type==="text"
        ?<div className="card-text">{content}</div>
        :<img className="image" src={content} alt="" />}
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
  }).isRequired
};

export default Card;
