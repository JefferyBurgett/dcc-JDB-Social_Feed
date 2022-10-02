import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Post.css'
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";




const Post = (props) => {
  const [like, setLike] = useState('inactive')
  function clickLike() {
    if(like === 'inactive') {
      setLike('like-active');
    }
    else {
      setLike('inactive');
    }
    setDislike('inactive')
  }

  const [dislike, setDislike] = useState('inactive')
  function clickDislike() {
    if(dislike === 'inactive') {
      setDislike('dislike-active');
    }
    else {
      setDislike('inactive');
    }
    setLike('inactive')
  }
  
  
    
    return (
     
    <div className="container">
      <h6 className="name">{props.Post.name}</h6>

      <div className="comment">
        <p>{props.Post.feed}</p>
        <div className="feedback-icons">
          <FontAwesomeIcon onClick={clickLike} icon={faThumbsUp} className={like} />
          <FontAwesomeIcon onClick={clickDislike} icon={faThumbsDown} className={dislike}/>
        </div>
      </div>
    </div>
  )
}

        
        
        
        
        
        export default Post;


