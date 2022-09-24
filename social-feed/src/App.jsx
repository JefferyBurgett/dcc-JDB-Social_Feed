import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePostForm from './Components/CreatePost/CreatePostForm';


function App() {

  const [feedPost, setfeedPost] = useState([{Name: 'Jeff B', Post: 'Forum Post Space'}])

  function addNewPost(feed){
    let tempPosts = [feed, ...feedPost];

    setfeedPost(tempPosts);
  }

  return (
    <div>
      <DisplayPosts parentPosts={feedPost}/>
      <CreatePostForm createNewPost={addNewPost} />










    </div>
  );
}

export default App;
