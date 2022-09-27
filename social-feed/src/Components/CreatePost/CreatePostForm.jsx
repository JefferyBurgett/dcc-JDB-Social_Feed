import React, { useState } from 'react';
import './CreatePost.css';

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [feed, setFeed] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            feed: feed
        };
        console.log(newPost);
        props.createNewPost(newPost);
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
            <label>Name</label>
            <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
            <label>Post</label>
          
            <input type='text' className='form-control' value={feed} onChange={(event) => setFeed(event.target.value)}/>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type='submit'className="btn btn-primary" style={{'marginTop' : '1em'}} >Create</button>
            </div>
        </form>
    )
}

export default CreatePostForm;