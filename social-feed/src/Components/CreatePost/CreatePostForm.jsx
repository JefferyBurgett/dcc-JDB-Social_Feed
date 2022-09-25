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
            <button type='submit'>Create</button>
        </form>
    )
}

export default CreatePostForm;