import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import "./Card.styles.css";


function Card({ data }) {
  const { content, type, user } = data;

  return (
    <div className="BlogCard">
      <div className="Head">
{/*================Avatar Component============================  */}
      <Avatar {...user} />
      </div>
      <div className="card-body">
{/*==============Render component according to content type======================  */}
      {type==="text"
        ?<div className="card-text">{content}</div>
        :<img className="image" src={content} alt="blog pictures" />}
      </div>
    </div>
  );
}

//=======================Card Props=================================
Card.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
  }).isRequired
};

export default Card;
