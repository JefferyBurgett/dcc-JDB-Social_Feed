import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Post.css'
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const Post = (props) => {
  return (
//Card Layout
<div className="post_card-container">
  <div className="post_card-author-name">{props.Post.name}</div>
  <div className="post_card-comment">{props.Post.feed}</div>
  <div className="post_card-feedback-icons">
    <FontAwesomeIcon icon={faThumbsUp} />
    <FontAwesomeIcon icon={faThumbsDown} />
  </div>
</div>
  )
}
export default Post;