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

    //   {/* <div className="border-box">
    //     <CreatePostForm createNewPost={addNewPost} />
    //     <div className="col-sm-3"></div>
    //   </div>
    //   <div className="border-box">
    //     <div className="col-md-6">
    //       <DisplayPosts parentPosts={postFeed} />
    //     </div>
    //   </div>
    // </div> */}
    
    
//     {/* old navbar */}
//     {/* <div className="container-fluid">
//       <div className="row">
//         <span style={{ margin: "1em" }}>
//           Social
//           <span className="text-muted">Feed</span>
//         </span>
//       </div>
//     </div>
//     <div className="container-fluid">
//     <div class="row">
// <div class="col-md-6 col-md-offset-3"></div> */}
    );
}

export default App;
