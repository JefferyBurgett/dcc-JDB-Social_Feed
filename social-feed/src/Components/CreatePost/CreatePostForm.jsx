import React, { useState } from 'react';


const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [postText, setpostText] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            newPostText: postText
        };
        console.log(newPost);
        props.createNewPost(newPost);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type='text' value={postText} onChange={(event) => setpostText(event.target.value)}/>
            <button type='submit'>Create</button>
        </form>
    )
}

export default CreatePostForm;