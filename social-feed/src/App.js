import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePostForm from './Components/CreatePost/CreatePostForm';
import NavBar from './Components/NavBar/NavBar'
import './App.css'


function App() {

  const [postFeed, setPostFeed] = useState([])

  function addNewPost(feed){
    let tempPosts = [...postFeed, feed];

    setPostFeed(tempPosts);
  }

  return (
  <div>
    <div className="container-fluid">
      <div className='row'>
        <span style={{margin: '1em'}}>Social
          <text className="text-muted">Feed</text></span>
        </div>
      </div>
  
    <div className='container-fluid'>
      <div className='col-md-6'>
        <div className='border-box'>
          <CreatePostForm createNewPost={addNewPost} />
        </div>
      <div className='border-box'>
        <DisplayPosts parentPosts={postFeed} />
      </div>
    </div>
  </div>
</div>



  );
}

export default App;
