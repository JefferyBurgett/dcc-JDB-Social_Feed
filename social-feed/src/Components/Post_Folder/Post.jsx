import React, { useState } from "react";

const Post = (props) => {
  return (

<div className="card">
  <div className='border-radius: 20%'>
  <div className="card-body">
    <h5 className="card-title">{props.Post.name}</h5>
    <p className="card-text">{props.Post.feed}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
</div>



    // <div>
    //   <tr>
    //     <div>
    //       <td>{props.Post.name}</td>
    //     </div>
    //     <div>
    //       <td>{props.Post.feed}</td>
    //     </div>
    //   </tr>
    // </div>
  );
};
export default Post;
