import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Post.css'
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const Post = (props) => {

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    //Card Layout
    <div className="post_card-container">
      <h6 className="card-title">{props.Post.name}</h6>
      <div className="post_card-comment">{props.Post.feed}
      <div className="post_card-feedback-icons">
        <FontAwesomeIcon icon={faThumbsUp} style={myStyle} />
        <FontAwesomeIcon icon={faThumbsDown} />
      </div>
      </div>
    </div>
  )
}
export default Post;