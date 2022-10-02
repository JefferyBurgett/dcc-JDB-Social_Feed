import React, { useState } from "react";
import "./CreatePost.css";

const CreatePostForm = (props) => {
  const [name, setName] = useState("");
  const [feed, setFeed] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      feed: feed,
    };
    console.log(newPost);
    props.createNewPost(newPost);
  }


  return (
    <div className="create-section">
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">        
            <div className="form-group">
              <label>Name</label>
              <input type="text" onChange={(event) => setName(event.target.value)} className="form-control" value={name}/>
            </div>

            <div className="form-group">
              <label>Post</label>
              <input type="text" onChange={(event) => setFeed(event.target.value)} className="form-control" value={feed}/>
            </div>
          </div> 
                  
        <div className="button-container">
          <button type="submit" className="btn btn-primary rounded-pill custom ">Create</button>
        </div>                      
      </form>
    </div>
  );
};

export default CreatePostForm;
