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
    <div className="main-page_body">
      <NavBar />
      <div className="main-page_posts-section">
        <CreatePostForm createNewPost={addNewPost} />
        <DisplayPosts parentPosts={postFeed} />
      </div>
    </div>

    );
}

export default App;
