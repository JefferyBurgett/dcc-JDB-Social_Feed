import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePostForm from "./Components/CreatePost/CreatePostForm";
import "./App.css";
import "./Components/NavBar/NavBar";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [postFeed, setPostFeed] = useState([]);

  function addNewPost(feed) {
    let tempPosts = [...postFeed, feed];

    setPostFeed(tempPosts);
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <span style={{ margin: "1em" }}>
            Social
            <span className="text-muted">Feed</span>
          </span>
        </div>
      </div>
      <div className="container">
        <div className="border-box">
          <div className="col-md-6 col-md-offset-3"></div>
            
            <CreatePostForm createNewPost={addNewPost} />
          </div>
          </div>
          <div className="container">
          
            <div className="row">
              <div className="col-md-6 col-md-offset-3"></div>

              <DisplayPosts parentPosts={postFeed} />
            </div>
          </div>
        </div>
      
   
  );
}

export default App;
