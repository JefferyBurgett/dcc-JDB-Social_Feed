import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';



function App() {

const [feedPost, setfeedPost] = useState([{Name: 'Jeff Burgett', Post: 'This is a test post'}])


  return (
    <div>
      <DisplayPosts parentPosts={feedPost}/>











    </div>
  );
}

export default App;
